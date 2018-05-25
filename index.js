var express = require("express");
var http = require('http');
var morgan = require("morgan");
var ejs = require("ejs");
var mongo = require('mongodb');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://asrikant:nodeproject@ds259305.mlab.com:59305/dist';
var fs   = require("fs");
var log = console.log.bind(this);
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var passport = require('passport');
var session = require('express-session');
var flash    = require('connect-flash');
var LocalStrategy = require('passport-local').Strategy;

//Init App
var app = express();