from google import genai

client = genai.Client(api_key="AIzaSyDLUO86YUMzHwVsCLunF2ure9MAlpXwkeI")
chat = client.chats.create(model="gemini-2.0-flash")

response = chat.send_message("I have 2 dogs in my house.")
print(response.text)

response = chat.send_message("How many paws are in my house?")
print(response.text)

chat = client.chats.create(model="gemini-2.0-flash", history=chat.get_history())

response = chat.send_message("Repeat the last sentence from ur last answer")
print(response.text)