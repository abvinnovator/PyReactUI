import pywhatkit
from datetime import datetime

def send_whatsapp_message():

    phone_number = input("Enter the phone number (include country code): ")
    message = input("Enter your message: ")
    date_str = input("Enter the date (in format DD-MM-YYYY): ")
    time_str = input("Enter the time (in 24-hour format HH:MM): ")

  
    date_time = datetime.strptime(date_str + ' ' + time_str, '%d-%m-%Y %H:%M')


    pywhatkit.sendwhatmsg(phone_number, message, date_time.hour, date_time.minute)

if __name__ == "__main__":
    send_whatsapp_message()
