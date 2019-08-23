import webapp2
import jinja2
import os

from google.appengine.api import users
from google.appengine.ext import ndb

from models import LoginInfo


jinja_env = jinja2.Environment(
    loader = jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions = ['jinja2.ext.autoescape'],
    autoescape=True
)

class MainMazePageHandler(webapp2.RequestHandler):
    def get(self):
        results_template = jinja_env.get_template('MazeHtml/maze.html')
        self.response.write(results_template.render())

class CharacterPageHandler(webapp2.RequestHandler):
    def get(self):
        results_template = jinja_env.get_template('MazeHtml/MazeCharacterSelect.html')
        self.response.write(results_template.render())

class LevelOnePageHandlerGreen(webapp2.RequestHandler):
    def get(self):
        results_template= jinja_env.get_template('MazeHtml/LevelOneMazeG.html')
        self.response.write(results_template.render())

class LevelOnePageHandlerBlue(webapp2.RequestHandler):
    def get(self):
        results_template= jinja_env.get_template('MazeHtml/LevelOneMazeB.html')
        self.response.write(results_template.render())

class LevelOnePageHandlerRed(webapp2.RequestHandler):
    def get(self):
        results_template= jinja_env.get_template('MazeHtml/LevelOneMazeR.html')
        self.response.write(results_template.render())


class LoginPageHandler(webapp2.RequestHandler):
#Credit goes to userapp via the Google CSSI Curiculum for providing most of the Login code
      def get(self):
        user = users.get_current_user()
        if user:
          email_address = user.nickname()
          maze_user = LoginInfo.get_by_id(user.user_id())
          signout_link_html = '<a href="%s">sign out</a>' % (
              users.create_logout_url('/login'))

          if maze_user:
              #returning user
            dict = {
            "FirstName": maze_user.fName,
            "LastName": maze_user.lName,
            "EmailAddress": email_address,
            "Logout": signout_link_html
            }
            results_template = jinja_env.get_template('MazeHtml/LoginReturningUser.html')
            self.response.write(results_template.render(dict))

          else:
              #first-time user
            self.response.write('''
                Welcome to our site, %s!  Please sign up! <br>
                <form method="post" action="/login">
                <input type="text" name="fName">
                <input type="text" name="lName">
                <input type="submit">
                </form><br> %s <br>
                ''' % (email_address, signout_link_html))

        else:
            results_template = jinja_env.get_template('MazeHtml/Login.html')
            self.response.write(results_template.render())

      def post(self):
        user = users.get_current_user()
        if not user:

          self.error(500)
          return
        maze_user = LoginInfo(
            fName=self.request.get('fName'),
            lName=self.request.get('lName'),
            id=user.user_id())
        maze_user.put()
        self.response.write('Thanks for signing up, %s!') %(maze_user.fName)

class DataBaseTestHandler(webapp2.RequestHandler):
    def get(self):
        start_template = jinja_env.get_template('MazeHtml/DataBaseTest.html')
        self.response.write(start_template.render())
        LoginInfo.query().fetch()



app = webapp2.WSGIApplication([
    ('/', MainMazePageHandler),
    ('/characterselection', CharacterPageHandler),
    ('/LeveloneG', LevelOnePageHandlerGreen),
    ('/LeveloneB', LevelOnePageHandlerBlue),
    ('/LeveloneR', LevelOnePageHandlerRed),
    ('/login', LoginPageHandler),
    ('/dbTest', DataBaseTestHandler)
], debug=True)
