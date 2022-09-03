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

            cursor.execute("SELECT * FROM User WHERE Username=%s", (_Username))
            data = cursor.fetchall()
            if len(data) > 0:
                response = jsonify(message='User already exist!', success=0)
                response.status_code = 409
                return response
            else:
                insert_user_cmd = """INSERT INTO User(FirstName, MiddleName, LastName, Gender, DOB, HomeAddress, MobileNumber, Email, Username, Password, CurrentWeight, CurrentHeight, BloodType, Allergies) 
                                    VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""

                cursor.execute(insert_user_cmd,  (_FirstName, _MiddleName, _LastName, _Gender, _DOB, _HomeAddress, _MobileNumber, _Email, _Username, _PasswordMd5, _CurrentWeight, _CurrentHeight, _BloodType, _Allergies))
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

api.add_resource(Test,'/')
api.add_resource(GetPredictionOutput,'/getPredictionOutput')
api.add_resource(User,'/user')
api.add_resource(UserLogin,'/userLogin')
api.add_resource(UserPaymentStatus,'/userPaymentStatus/<int:user_id>')
api.add_resource(UserAddPayment,'/userAddPayment')

if __name__ == '__main__':
    app.run(debug=True)
