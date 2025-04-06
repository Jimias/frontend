# load_env.py
import os
from dotenv import load_dotenv

load_dotenv()

Username = os.getenv('Username')
Password = os.getenv('Password')

