// insert users
db.users.insertMany(
    [
        {
          "user_id": 1,
          "name": "Rajesh Kumar",
          "email": "rajesh@example.com"
        },
        {
          "user_id": 2,
          "name": "Priya Srinivasan",
          "email": "priya@example.com"
        },
        {
          "user_id": 3,
          "name": "Sanjay Iyer",
          "email": "sanjay@example.com"
        },
        {
          "user_id": 4,
          "name": "Deepika Venkatraman",
          "email": "deepika@example.com"
        },
        {
          "user_id": 5,
          "name": "Suresh Krishnan",
          "email": "suresh@example.com"
        }
      ]       
)

// insert codekata
db.codekata.insertMany(
    [
        {
          "user_id": 1,
          "problem_id": 1,
          "solved": true
        },
        {
          "user_id": 1,
          "problem_id": 2,
          "solved": true
        },
        {
          "user_id": 1,
          "problem_id": 3,
          "solved": true
        },
        {
          "user_id": 2,
          "problem_id": 1,
          "solved": true
        },
        {
          "user_id": 2,
          "problem_id": 2,
          "solved": false
        },
        {
          "user_id": 2,
          "problem_id": 3,
          "solved": true
        },
        {
          "user_id": 3,
          "problem_id": 1,
          "solved": false
        },
        {
          "user_id": 3,
          "problem_id": 2,
          "solved": true
        },
        {
          "user_id": 3,
          "problem_id": 3,
          "solved": false
        },
        {
          "user_id": 4,
          "problem_id": 1,
          "solved": true
        },
        {
          "user_id": 4,
          "problem_id": 2,
          "solved": true
        },
        {
          "user_id": 4,
          "problem_id": 3,
          "solved": true
        },
        {
          "user_id": 5,
          "problem_id": 1,
          "solved": true
        },
        {
          "user_id": 5,
          "problem_id": 2,
          "solved": false
        },
        {
          "user_id": 5,
          "problem_id": 3,
          "solved": false
        }
      ]
      
    )

// insert attendance
db.attendance.insertMany(
    [
        {
          "user_id": 1,
          "present": true,
          "session_date": "2020-09-05"
        },
        {
          "user_id": 1,
          "present": true,
          "session_date": "2020-10-10"
        },
        {
          "user_id": 1,
          "present": false,
          "session_date": "2020-10-15"
        },
        {
          "user_id": 1,
          "present": true,
          "session_date": "2020-10-22"
        },
        {
          "user_id": 1,
          "present": false,
          "session_date": "2020-10-28"
        },
        {
          "user_id": 2,
          "present": true,
          "session_date": "2020-09-05"
        },
        {
          "user_id": 2,
          "present": false,
          "session_date": "2020-10-10"
        },
        {
          "user_id": 2,
          "present": true,
          "session_date": "2020-10-15"
        },
        {
          "user_id": 2,
          "present": true,
          "session_date": "2020-10-22"
        },
        {
          "user_id": 2,
          "present": true,
          "session_date": "2020-10-28"
        },
        {
          "user_id": 3,
          "present": true,
          "session_date": "2020-09-05"
        },
        {
          "user_id": 3,
          "present": false,
          "session_date": "2020-10-10"
        },
        {
          "user_id": 3,
          "present": true,
          "session_date": "2020-10-15"
        },
        {
          "user_id": 3,
          "present": false,
          "session_date": "2020-10-22"
        },
        {
          "user_id": 3,
          "present": true,
          "session_date": "2020-10-28"
        },
        {
          "user_id": 4,
          "present": false,
          "session_date": "2020-09-05"
        },
        {
          "user_id": 4,
          "present": true,
          "session_date": "2020-10-10"
        },
        {
          "user_id": 4,
          "present": true,
          "session_date": "2020-10-15"
        },
        {
          "user_id": 4,
          "present": true,
          "session_date": "2020-10-22"
        },
        {
          "user_id": 4,
          "present": true,
          "session_date": "2020-10-28"
        },
        {
          "user_id": 5,
          "present": true,
          "session_date": "2020-09-05"
        },
        {
          "user_id": 5,
          "present": true,
          "session_date": "2020-10-10"
        },
        {
          "user_id": 5,
          "present": true,
          "session_date": "2020-10-15"
        },
        {
          "user_id": 5,
          "present": true,
          "session_date": "2020-10-22"
        },
        {
          "user_id": 5,
          "present": false,
          "session_date": "2020-10-28"
        }
      ]
      
)

// insert topics
db.topics.insertMany([
    {
      "mentor_id": 1,
      "topic_name": "HTML",
      "session_date": "2020-09-05"
    },
    {
      "mentor_id": 1,
      "topic_name": "CSS",
      "session_date": "2020-10-10"
    },
    {
      "mentor_id": 2,
      "topic_name": "Bootstrap",
      "session_date": "2020-10-15"
    },
    {
      "mentor_id": 2,
      "topic_name": "JavaScript",
      "session_date": "2020-10-22"
    },
    {
      "mentor_id": 3,
      "topic_name": "React.js",
      "session_date": "2020-10-28"
    }
  ])

// insert task
db.tasks.insertMany(
    [
        {
          "user_id": 1,
          "task_id": 1,
          "task_name": "Task 1",
          "submission_date": "2020-09-20",
          "submited":true
        },
        {
          "user_id": 1,
          "task_id": 2,
          "task_name": "Task 2",
          "submission_date": "2020-10-05",
          "submited":true
        },
        {
          "user_id": 1,
          "task_id": 3,
          "task_name": "Task 3",
          "submission_date": "2020-10-10",
          "submited":true
        },
        {
          "user_id": 1,
          "task_id": 4,
          "task_name": "Task 4",
          "submission_date": "2020-10-15",
          "submited":true
        },
        {
          "user_id": 1,
          "task_id": 5,
          "task_name": "Task 5",
          "submission_date": "2020-10-20",
          "submited":true
        },
        {
          "user_id": 2,
          "task_id": 1,
          "task_name": "Task 1",
          "submission_date": "2020-10-01",
          "submited":true
        },
        {
          "user_id": 2,
          "task_id": 2,
          "task_name": "Task 2",
          "submission_date": "2020-10-06",
          "submited":true
        },
        {
          "user_id": 2,
          "task_id": 3,
          "task_name": "Task 3",
          "submission_date": "2020-10-11",
          "submited":true
        },
        {
          "user_id": 2,
          "task_id": 4,
          "task_name": "Task 4",
          "submission_date": "2020-10-16",
          "submited":false
        },
        {
          "user_id": 2,
          "task_id": 5,
          "task_name": "Task 5",
          "submission_date": "2020-10-21",
          "submited":true
        },
        {
          "user_id": 3,
          "task_id": 1,
          "task_name": "Task 1",
          "submission_date": "2020-10-02",
          "submited":true
        },
        {
          "user_id": 3,
          "task_id": 2,
          "task_name": "Task 2",
          "submission_date": "2020-10-07",
          "submited":true
        },
        {
          "user_id": 3,
          "task_id": 3,
          "task_name": "Task 3",
          "submission_date": "2020-10-12",
          "submited":true
        },
        {
          "user_id": 3,
          "task_id": 4,
          "task_name": "Task 4",
          "submission_date": "2020-10-17",
          "submited":true
        },
        {
          "user_id": 3,
          "task_id": 5,
          "task_name": "Task 5",
          "submission_date": "2020-10-22",
          "submited":true
        },
        {
          "user_id": 4,
          "task_id": 1,
          "task_name": "Task 1",
          "submission_date": "2020-10-03",
          "submited":true
        },
        {
          "user_id": 4,
          "task_id": 2,
          "task_name": "Task 2",
          "submission_date": "2020-10-08",
          "submited":true
        },
        {
          "user_id": 4,
          "task_id": 3,
          "task_name": "Task 3",
          "submission_date": "2020-10-13",
          "submited":true
        },
        {
          "user_id": 4,
          "task_id": 4,
          "task_name": "Task 4",
          "submission_date": "2020-10-18",
          "submited":false
        },
        {
          "user_id": 4,
          "task_id": 5,
          "task_name": "Task 5",
          "submission_date": "2020-10-23",
          "submited":true
        },
        {
          "user_id": 5,
          "task_id": 1,
          "task_name": "Task 1",
          "submission_date": "2020-10-04",
          "submited":true
        },
        {
          "user_id": 5,
          "task_id": 2,
          "task_name": "Task 2",
          "submission_date": "2020-10-09",
          "submited":true
        },
        {
          "user_id": 5,
          "task_id": 3,
          "task_name": "Task 3",
          "submission_date": "2020-10-14",
          "submited":true
        },
        {
          "user_id": 5,
          "task_id": 4,
          "task_name": "Task 4",
          "submission_date": "2020-10-19",
          "submited":true
        },
        {
          "user_id": 5,
          "task_id": 5,
          "task_name": "Task 5",
          "submission_date": "2020-10-24",
          "submited":true
        }
      ]
      
)

// insert company_drive
db.company_drives.insertMany(
    [
        {
          "company_id": 1,
          "company_name": "ABC Corporation",
          "date": "2020-10-16",
          "user_id": 1,
          "company_appeared": true,
          "user_appeared": true
        },
        {
          "company_id": 2,
          "company_name": "XYZ Corporation",
          "date": "2020-10-18",
          "user_id": 1,
          "company_appeared": true,
          "user_appeared": true
        },
        {
          "company_id": 3,
          "company_name": "PQR Industries",
          "date": "2020-10-20",
          "user_id": 2,
          "company_appeared": true,
          "user_appeared": false
        },
        {
          "company_id": 4,
          "company_name": "LMN Solutions",
          "date": "2020-10-22",
          "user_id": 3,
          "company_appeared": true,
          "user_appeared": true
        },
        {
          "company_id": 5,
          "company_name": "EFG Enterprises",
          "date": "2020-10-24",
          "user_id": 4,
          "company_appeared": true,
          "user_appeared": false
        },
        {
          "company_id": 6,
          "company_name": "JKL Corporation",
          "date": "2020-10-16",
          "user_id": 2,
          "company_appeared": true,
          "user_appeared": true
        },
        {
          "company_id": 7,
          "company_name": "MNO Industries",
          "date": "2020-10-18",
          "user_id": 2,
          "company_appeared": true,
          "user_appeared": false
        },
        {
          "company_id": 8,
          "company_name": "IJK Solutions",
          "date": "2020-10-20",
          "user_id": 3,
          "company_appeared": true,
          "user_appeared": true
        },
        {
          "company_id": 9,
          "company_name": "PQR Enterprises",
          "date": "2020-10-22",
          "user_id": 4,
          "company_appeared": true,
          "user_appeared": false
        },
        {
          "company_id": 10,
          "company_name": "DEF Corporation",
          "date": "2020-10-24",
          "user_id": 5,
          "company_appeared": true,
          "user_appeared": true
        }
      ]
      
      
)

//insert mentors
db.mentors.insertMany(
    [
        {
          "mentor_id": 1,
          "mentor_name": "Suresh Kumar",
          "email": "suresh.kumar@example.com",
          "mentee_count": 17
        },
        {
          "mentor_id": 2,
          "mentor_name": "Priya Ramanathan",
          "email": "priya.ramanathan@example.com",
          "mentee_count": 10
        },
        {
          "mentor_id": 3,
          "mentor_name": "Karthik Nair",
          "email": "karthik.nair@example.com",
          "mentee_count": 8
        }
      ]
      
      
)






// Find all the topics and tasks which are thought in the month of October
db.topics.aggregate([
    {
      $match: {
        session_date: {
          $gte: '2020-10-01',
          $lte: '2020-10-31'
        }
      }
    },
    {
      $lookup: {
        from: "tasks",
        localField: "session_date",
        foreignField: "submission_date",
        as: "tasks"
      }
    }
  ])
  
  

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({
    date: {
      $gte: ISODate("2020-10-15"),
      $lte: ISODate("2020-10-31")
    }
  })
  
  

// Find all the company drives and students who are appeared for the placement.
db.company_drives.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "user_id",
        as: "student_info"
      }
    }
  ])
  

// Find the number of problems solved by the user in codekata
db.codekata.aggregate([
    {
      $group: {
        _id: "$user_id",
        problems_solved: { $sum: { $cond: ["$solved", 1, 0] } }
      }
    },
    {
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "user_id",
        as: "user"
      }
    },
    {
      $unwind: "$user"
    },
    {
      $project: {
        _id: 0,
        user_name: "$user.name",
        problems_solved: 1
      }
    }
  ])
  
  

// Find all the mentors with who has the mentee's count more than 15
db.mentors.find({ mentee_count: { $gt: 15 } })
  

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.attendance.find({
    present: false,
    session_date: {
      $gte: "2020-10-15",
      $lte: "2020-10-31"
    }
  }).count()
    

