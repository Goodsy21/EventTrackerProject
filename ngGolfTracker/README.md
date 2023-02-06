# NgGolfTracker

GolfTracker is an API used to track stats for rounds of golf with a spin. Instead of a traditional tracker which focuses on bogeys and birdies and general scores, this tracker tracks lost balls, green fees, and beverages consumed; all with the purpose of tracking money spent.

##Description
After a round of golf a user can input their statistics which are stored in a database.
Users can look up rounds by id, update by id, find all rounds, create new rounds or delete rounds.

##REST Endpoints

| HTTP Verb | URI                | Request Body                        | Response Body           |
| --------- | ------------------ | ----------------------------------- | ----------------------- |
| GET       | `/api/rounds`      |                                     | JSON of `List<Round>`   |
| GET       | `/api/rounds/{id}` |                                     | JSON of `Round` 17      |
| POST      | `/api/rounds`      | JSON of a new `Round`               | JSON of created `Round` |
| PUT       | `/api/rounds/{id}` | JSON of a new version of `Round` 17 | JSON of updated `Round` |
| DELETE    | `/api/rounds/{id}` |                                     |                         |

#Lessons Learned

- ATTENTION TO DETAIL... when you're banging your head against the wall to figure out a problem, don't hesitate to take a step back. Come back with fresh eyes and you'll likely realize the mistake you've made. You'll likely also beat yourself up about it, which is warranted, dummy; but at least you learned a lesson.
- There are multiple ways to get something done. Don't try to solve every hangup with the same strategy.
- Proper preparation for a task save a lot of time. As Abraham Lincoln said "If I only had an hour to chop down a tree, I would spend the first 45 minutes sharpening my axe.”

##Technologies and Methodologies Used

- Java
- SQL
- Hibernate
- Spring Framework
- Spring Boot
- Postman
- Gradle
- MYsql
- GIThub
- AJAX
- Angular
- Bootstrap

##Project Goals

- User integration and authentication
- Course integration to include more details about the courses played
- "Search by" functionality
- More statistics: show correlations between multiple stats. Ex: variance from average per ball lost/greenFees/beverages.
- Social(!) integration
- Improve styling to include dynamic properties.
