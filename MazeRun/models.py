from google.appengine.ext import ndb

class Character(ndb.Model):
    player_name = ndb.StringProperty(required=True)
    player_color = ndb.StringProperty(required=True)
    player_health = ndb.IntegerProperty(required=True)
    player_coin_count = ndb.IntegerProperty(required=True)

class LoginInfo(ndb.Model):
    uName = ndb.StringProperty(required=True)
    pWord = ndb.StringProperty(required=True)
