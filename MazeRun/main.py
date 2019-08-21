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







app = webapp2.WSGIApplication([
    ('/', MainMazePageHandler),
    ('/characterselection', CharacterPageHandler)
], debug=True)
