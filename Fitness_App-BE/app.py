from sre_constants import SUCCESS
from flask import Flask, request, redirect, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
import os
import prediction
from flaskext.mysql import MySQL
import hashlib

mysql = MySQL()
app = Flask(__name__)

app.config['MYSQL_DATABASE_USER'] = 'rmtuser'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Ayozat@RMT%2023'
app.config['MYSQL_DATABASE_DB'] = 'test_fitness'
app.config['MYSQL_DATABASE_HOST'] = '109.228.57.45'
mysql.init_app(app)

cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)

class Test(Resource):
    def get(self):
        return 'Welcome to, Fitness App API!'
    
    def post(self):
        try:
            value = request.get_json()
            if(value):
                return {'Post Values': value}, 201
            
            return {"error":"Invalid format."}
            
        except Exception as error:
            return {'error': error}

class GetPredictionOutput(Resource):
    def get(self):
        return {"error":"Invalid Method."}

    def post(self):
        try:
            data = request.get_json()
            # print(data)
            predict = prediction.predict_mpg(data)
            predictOutput = predict
            return {'predict':predictOutput}

        except Exception as error:
            return {'error': error}

class User(Resource):
    def get(self):
        try:            
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.execute("""select * from User""")
            data = cursor.fetchall()
            data = [dict(zip([key[0] for key in cursor.description], row)) for row in data]
            response = jsonify(data)
            response.status_code = 200
            return response

        except Exception as error:
            return {'error': error}

        finally:
            conn.close()

    def post(self):
        try:          
            conn = mysql.connect()
            cursor = conn.cursor()
            _FirstName = request.form['FirstName']
            _MiddleName = request.form['MiddleName']
            _LastName = request.form['LastName']
            _Gender = request.form['Gender']
            _DOB = request.form['DOB']
            _HomeAddress = request.form['HomeAddress']
            _MobileNumber = request.form['MobileNumber']
            _Email = request.form['Email']
            _Username = request.form['Username']
            _Password = request.form['Password']
            _PasswordMd5 = hashlib.md5(_Password.encode()).hexdigest()
            _CurrentWeight = request.form['CurrentWeight']
            _CurrentHeight = request.form['CurrentHeight']
            _BloodType = request.form['BloodType']
            _Allergies = request.form['Allergies']
            _UserRole = request.form['UserRole']

            cursor.execute("SELECT * FROM User WHERE Username=%s", (_Username))
            data = cursor.fetchall()
            if len(data) > 0:
                response = jsonify(message='User already exist!', success=0)
                response.status_code = 409
                return response
            else:
                insert_user_cmd = """INSERT INTO User(FirstName, MiddleName, LastName, Gender, DOB, HomeAddress, MobileNumber, Email, Username, Password, CurrentWeight, CurrentHeight, BloodType, Allergies, UserRole) 
                                    VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""

                cursor.execute(insert_user_cmd,  (_FirstName, _MiddleName, _LastName, _Gender, _DOB, _HomeAddress, _MobileNumber, _Email, _Username, _PasswordMd5, _CurrentWeight, _CurrentHeight, _BloodType, _Allergies, _UserRole))
                conn.commit()
                response = jsonify(message='User added successfully.', id=cursor.lastrowid)
                response.status_code = 200
                return response

        except Exception as error:
            return {'error': error}

        finally:
            conn.close()

class UserLogin(Resource):
    def get(self):
        return {"error":"Invalid Method."}

    def post(self):
        try:
            conn = mysql.connect()
            cursor = conn.cursor()
            _Username = request.form['Username']
            _Password = request.form['Password']
            _PasswordMd5 = hashlib.md5(_Password.encode()).hexdigest()
            cursor.execute("SELECT * FROM User WHERE Username=%s AND Password=%s", (_Username, _PasswordMd5))
            data = cursor.fetchall()
            if len(data) > 0:
                response = jsonify(message='User login successfully.', success=1)
                response.status_code = 200
                return response
            else:
                response = jsonify(message='User login failed.', success=0)
                response.status_code = 409
                return response

        except Exception as error:
            return {'error': error}

        finally:
            conn.close()

class UserPaymentStatus(Resource):
    def get(self, user_id):
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.execute('select * from UserPayment where UserId = %s',user_id)
        data = cursor.fetchall()
        data = [dict(zip([key[0] for key in cursor.description], row)) for row in data]
        response = jsonify(data)
        response.status_code = 200
        return response

    def post(self):
        return {"error":"Invalid Method."}

class UserAddPayment(Resource):
    def get(self):
        return {"error":"Invalid Method."}

    def post(self):
        try:
            conn = mysql.connect()
            cursor = conn.cursor()
            _UserId = request.form['UserId']
            _PaymentType = request.form['PaymentType']

            cursor.execute("SELECT * FROM UserPayment WHERE UserId=%s", (_UserId))
            data = cursor.fetchall()
            if len(data) > 0:
                response = jsonify(message='User already payed!', success=0)
                response.status_code = 409
                return response
            else:
                insert_userPayment_cmd = """INSERT INTO UserPayment(UserId, PaymentType) 
                                    VALUES(%s, %s)"""

                cursor.execute(insert_userPayment_cmd,  (_UserId, _PaymentType))
                conn.commit()
                response = jsonify(message='User payment added successfully.', id=cursor.lastrowid)
                response.status_code = 200
                return response

        except Exception as error:
            return {'error': error}

        finally:
            conn.close()

class MealPlan(Resource):
    def get(self):
        try:            
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.execute("""select * from MealPlan""")
            data = cursor.fetchall()
            data = [dict(zip([key[0] for key in cursor.description], row)) for row in data]
            response = jsonify(data)
            response.status_code = 200
            return response

        except Exception as error:
            return {'error': error}

        finally:
            conn.close()

    def post(self):
        try:
            conn = mysql.connect()
            cursor = conn.cursor()

            _MemberId = request.form['MemberId']
            _StartDate = request.form['StartDate']
            _EndDate = request.form['EndDate']
            _SelectDays = request.form['SelectDays']
            _Breakfast = request.form['Breakfast']
            _MidMorningSnack = request.form['MidMorningSnack']
            _Lunch = request.form['Lunch']
            _AfternoonSnack = request.form['AfternoonSnack']
            _Dinner = request.form['Dinner']
            _Status = request.form['Status']
            _ApprovedBy = request.form['ApprovedBy']

            cursor.execute("SELECT * FROM MealPlan WHERE UserId=%s", (_MemberId))
            data = cursor.fetchall()
            if len(data) > 0:
                response = jsonify(message='User already have meal plan!', success=0)
                response.status_code = 409
                return response
            else:
                insert_mealPlan_cmd = """INSERT INTO MealPlan(UserId, StartDate, EndDate, SelectDays, Breakfast, MidMorningSnack, Lunch, AfternoonSnack, Dinner, Status, ApprovedBy) 
                                    VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""

                cursor.execute(insert_mealPlan_cmd,  (_MemberId, _StartDate, _EndDate, _SelectDays, _Breakfast, _MidMorningSnack, _Lunch, _AfternoonSnack, _Dinner, _Status, _ApprovedBy))
                conn.commit()
                response = jsonify(message='Meal plan added successfully.', id=cursor.lastrowid)
                response.status_code = 200
                return response

        except Exception as error:
            return {'error': error}

        finally:
            conn.close()

class GetMealPlanByUserId(Resource):
    def get(self, user_id):
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.execute('select * from MealPlan where UserId = %s',user_id)
        data = cursor.fetchall()
        data = [dict(zip([key[0] for key in cursor.description], row)) for row in data]
        response = jsonify(data)
        response.status_code = 200
        return response

    def post(self):
        return {"error":"Invalid Method."}

class SchedulePlan(Resource):
    def get(self):
        try:            
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.execute("""SELECT * from Schedule""")
            data = cursor.fetchall()
            data = [dict(zip([key[0] for key in cursor.description], row)) for row in data]
            response = jsonify(data)
            response.status_code = 200
            return response

        except Exception as error:
            return {'error': error}

        finally:
            conn.close()

    def post(self):
        try:
            conn = mysql.connect()
            cursor = conn.cursor()

            _MemberId = request.form['MemberId']
            _ScheduleTypeName = request.form['ScheduleTypeName']
            _Exercise = request.form['Exercise']
            _Sets = request.form['Sets']
            _Kg = request.form['Kg']
            _RestTime = request.form['RestTime']
            _Reps = request.form['Reps']

            insert_mealPlan_cmd = """INSERT INTO customizedSchedule(UserId, ScheduleTypeName, Exercise, Sets, Kg, RestTime, Reps) 
                                    VALUES(%s, %s, %s, %s, %s, %s, %s)"""

            cursor.execute(insert_mealPlan_cmd,  (_MemberId, _ScheduleTypeName, _Exercise, _Sets, _Kg, _RestTime, _Reps))
            conn.commit()
            response = jsonify(message='Schedule plan added successfully.', id=cursor.lastrowid)
            response.status_code = 200
            return response

        except Exception as error:
            return {'error': error}

        finally:
            conn.close()

class SchedulePlanByUserId(Resource):
    def get(self, user_id):
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.execute('select * from customizedSchedule where UserId = %s',user_id)
        data = cursor.fetchall()
        data = [dict(zip([key[0] for key in cursor.description], row)) for row in data]
        response = jsonify(data)
        response.status_code = 200
        return response

    def post(self):
        return {"error":"Invalid Method."}

class SchedulePlanAll(Resource):
    def get(self):
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.execute('select customizedSchedule.*, User.* from customizedSchedule, User WHERE customizedSchedule.UserID = User.UserId')
        data = cursor.fetchall()
        data = [dict(zip([key[0] for key in cursor.description], row)) for row in data]
        response = jsonify(data)
        response.status_code = 200
        return response

    def post(self):
        return {"error":"Invalid Method."}
class ApproveSchedulePlan(Resource):
    def get(self):
        return {"error":"Invalid Method."}

    def post(self):
        try:
            conn = mysql.connect()
            cursor = conn.cursor()

            _CustomizedScheduleId = request.form['CustomizedScheduleId']

            update_approveSchedulePlan_cmd = """UPDATE customizedSchedule SET Status = 1 WHERE CustomizedScheduleId = %s"""
            cursor.execute(update_approveSchedulePlan_cmd,  (_CustomizedScheduleId))
            conn.commit()
            response = jsonify(message='Schedule plan Approved successfully.', id=cursor.lastrowid)
            response.status_code = 200
            return response

        except Exception as error:
            return {'error': error}

        finally:
            conn.close()

api.add_resource(Test,'/')
api.add_resource(GetPredictionOutput,'/getPredictionOutput')
api.add_resource(User,'/user')
api.add_resource(UserLogin,'/userLogin')
api.add_resource(UserPaymentStatus,'/userPaymentStatus/<int:user_id>')
api.add_resource(UserAddPayment,'/userAddPayment')
api.add_resource(MealPlan,'/mealPlan')
api.add_resource(GetMealPlanByUserId,'/mealPlan/<int:user_id>')
api.add_resource(SchedulePlan,'/schedule')
api.add_resource(SchedulePlanAll,'/customizedSchedule')
api.add_resource(SchedulePlanByUserId,'/customizedSchedule/<int:user_id>')
api.add_resource(ApproveSchedulePlan,'/approveCustomizedSchedule')

if __name__ == '__main__':
    app.run(debug=True)
