var redis = require('redis');
redis_client = redis.createClient();

/* "Key" :
 * 	   -- information that key returns
 * 
 * Course :
 * 	1. Title
 *  2. Section_ID
 *  3. Instructor
 *  4. Department
 *  5. Date/Time
 *  6. Description
 *  7. Closed/Open
 *  8. Credit 
 * 
 * Departments:
 *  - list of courses
 * 
 * Time/Date:
 * 	list of courses at that time/date
 * 
 * Instructor:
 * 	1. full name
 *  2. list of courses
 *  3. department
 *  
 *  
 *  
//populate the databases - psuedo code:

//use the api registrar to search by *: 
// for each course received:
	// redis.hset("dept:xxx:course:xxx, field1:data1, field2:data2......,
	// redis.lpush("course.instructor", listItem")
	// redis.zadd("zadd timedate_courses timevalue "dept:xxx:course:xxx")
	// redis.lpush("course.department", listItem")


 */

var course = new Object() {
	
}

var get_courses_in_dept = function(dept){
	//search by department, get list of courses
}

var get_course = function(section_id) {
	// if you search courses, you'll get 
}

var get_location = function(section_id) {

}

var get_instructor = function(section_id) {

}

var get_schedule = function(section_id) {
	
}
//populating the database
var populate = function() {
	
	
	
	
	
	
}



