# EventTrackerProject
###GolfTracker

##Overview
GolfTracker is an API used to track stats for rounds of golf with a spin. Instead of a traditional tracker which focuses on bogeys and birdies and general scores, this tracker tracks lost balls, beverages consumed, and money spent.

##Description
After a round of golf a user can input their statistics which are stored in a database.
Users can look up rounds by id, update by id, find all rounds, create new rounds or delete rounds.

##MYsql directions
use mysql -u golfer -p
user and pw = golfer
DB access = use golfstatsdb;
IP address 54.244.153.175

##REST Endpoints

| HTTP Verb | URI                  | Request Body | Response Body |
|-----------|----------------------|--------------|---------------|
| GET       | `/api/rounds`    |              | JSON of `List<Round>` |
| GET       | `/api/rounds/{id}` |              | JSON of `Round` 17 |
| POST      | `/api/rounds`    | JSON of a new `Round` | JSON of created `Round` |
| PUT       | `/api/rounds/{id}` | JSON of a new version of `Round` 17 | JSON of updated `Round` |
| DELETE    | `/api/rounds/{id}` |              | |

#Lessons Learned
-ATTENTION TO DETAIL... when you're banging your head against the wall to figure out a problem, don't hesitate to take a step back. Come back with fresh eyes and you'll likely realize the mistake you've made. You'll likely also beat yourself up about it, which is warranted, dummy; but at least you learned a lesson.


##Technologies and Methodologies Used
-Java
-SQL
-Hibernate
-Spring Framework
-Spring Boot
-Postman
-Gradle
-MYsql
-GIThub

##Project Goals
-User Integration
-Course Integration
-Social(!) Integration
