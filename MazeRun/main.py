import webapp2
import jinja2
import os


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



class LevelTwoPageHandlerGreen(webapp2.RequestHandler):
    def get(self):
        results_template= jinja_env.get_template('MazeHtml/LevelTwoMazeG.html')
        self.response.write(results_template.render())

class LevelTwoPageHandlerBlue(webapp2.RequestHandler):
    def get(self):
        results_template= jinja_env.get_template('MazeHtml/LevelTwoMazeB.html')
        self.response.write(results_template.render())

class LevelTwoPageHandlerRed(webapp2.RequestHandler):
    def get(self):
        results_template= jinja_env.get_template('MazeHtml/LevelTwoMazeR.html')
        self.response.write(results_template.render())




class LevelThreePageHandlerGreen(webapp2.RequestHandler):
    def get(self):
        results_template= jinja_env.get_template('MazeHtml/LevelThreemazeG.html')
        self.response.write(results_template.render())

class LevelThreePageHandlerBlue(webapp2.RequestHandler):
    def get(self):
        results_template= jinja_env.get_template('MazeHtml/LevelThreemazeB.html')
        self.response.write(results_template.render())

class LevelThreePageHandlerRed(webapp2.RequestHandler):
    def get(self):
        results_template= jinja_env.get_template('MazeHtml/LevelThreemazeR.html')
        self.response.write(results_template.render())


class LoginPageHandler(webapp2.RequestHandler):
    def get(self):
        results_template = jinja_env.get_template('MazeHtml/MazeGame3.html')
        self.response.write(results_template.render())

class PageHandler(webapp2.RequestHandler):
    def get(self):
        results_template = jinja_env.get_template('MazeHtml/MazeGame3.html')
        self.response.write(results_template.render())

class testPaper(webapp2.RequestHandler):
    def get(self):
        results_template = jinja_env.get_template('MazeHtml/testpaper.html')
        self.response.write(results_template.render())



app = webapp2.WSGIApplication([
    ('/', MainMazePageHandler),
    ('/characterselection', CharacterPageHandler),
    ('/LeveloneG', LevelOnePageHandlerGreen),
    ('/LeveloneB', LevelOnePageHandlerBlue),
    ('/LeveloneR', LevelOnePageHandlerRed),
    ('/LeveltwoG', LevelTwoPageHandlerGreen),
    ('/LeveltwoB', LevelTwoPageHandlerBlue),
    ('/LeveltwoR', LevelTwoPageHandlerRed),
    ('/LevelthreeG', LevelThreePageHandlerGreen),
    ('/LevelthreeB', LevelThreePageHandlerBlue),
    ('/LevelthreeR', LevelThreePageHandlerRed),
    ('/testPaper', testPaper)
], debug=True)
