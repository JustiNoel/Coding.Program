import phonenumbers
from phonenumbers import geocoder
phone_number1 = phonenumbers.parse("+254740419030")
phone_number2 = phonenumbers.parse("+254752140592")
phone_number3 = phonenumbers.parse("+254716885050")
phone_number4 = phonenumbers.parse("+254797457191")

print("\nPhone Numbers Location\n")
print(geocoder.description_for_number(phone_number1, "en"));
print(geocoder.description_for_number(phone_number2, "en"));
print(geocoder.description_for_number(phone_number3, "en"));
print(geocoder.description_for_number(phone_number4, "en"));

# LETS TRACK PHONE NUMBERS