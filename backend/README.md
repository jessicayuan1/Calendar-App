# Windows

## Clean Install

$ cd backend
$ pip install virtualenv
$ python -m virtualenv venv
$ source venv/Scripts/activate
$ choco install mysql
$ pip install -r requirements.txt
$ python manage.py runserver

- install the package virtualenv using pip
- Use the package virtualenv to create the folder venv
- Activate venv
- install required packages
- run server

## Updating packages

$ source venv/Scripts/activate
$ pip install -r requirements.txt

## Adding new packages

source venv/Scripts/activate
pip install \<new_package\>
pip freeze > requirements.txt

# Unix

## Clean Install

Navigate to backend
MacOS
$ brew install python

$ pip3 install virtualenv
$ virtualenv venv

Linux
$ venv\Scripts\activate
MacOS
$ source venv/bin/activate

$ brew install mysql
$ pip install -r requirements.txt
$ python manage.py runserver

- install python
- install the package virtualenv using pip
- Use the package virtualenv to create the folder venv
- Activate venv
- install required packages
- run server

## Updating packages

MacOS
$ source venv/bin/activate
Linux
$ venv\Scripts\activate

## Adding new packages

Linux
$ venv\Scripts\activate
MacOS
$ source venv/bin/activate

$ pip install \<new_package\>
$ pip freeze > requirements.txt
$ pip install -r requirements.txt
$ python -m venv --upgrade
