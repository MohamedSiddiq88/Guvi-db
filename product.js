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
      "topic_id":1,
      "topic_name": "HTML",
      "session_date": "2020-09-05"
    },
    {
      "mentor_id": 1,
      "topic_id":2,
      "topic_name": "CSS",
      "session_date": "2020-10-10"
    },
    {
      "mentor_id": 2,
      "topic_id":3,
      "topic_name": "Bootstrap",
      "session_date": "2020-10-15"
    },
    {
      "mentor_id": 2,
      "topic_id":4,
      "topic_name": "JavaScript",
      "session_date": "2020-10-22"
    },
    {
      "mentor_id": 3,
      "topic_id":5,
      "topic_name": "React.js",
      "session_date": "2020-10-28"
    }
  ])

//plain task
db.plain_tasks.insertMany([
  {
    "task_id": 1,
    "task_name": "Task 1",
    "submission_date": "2020-09-20"
  },
  {
    "task_id": 2,
    "task_name": "Task 2",
    "submission_date": "2020-10-05"
  },
  {
    "task_id": 3,
    "task_name": "Task 3",
    "submission_date": "2020-10-10"
  },
  {
    "task_id": 4,
    "task_name": "Task 4",
    "submission_date": "2020-10-15"
  },
  {
    "task_id": 5,
    "task_name": "Task 5",
    "submission_date": "2020-10-20"
  }
]);


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
        $gte: "2020-10-01",
        $lte: "2020-10-31"
      }
    }
  },
  {
    $lookup: {
      from: "plain_tasks",
      localField: "topic_id",
      foreignField: "task_id",
      as: "tasks"
    }
  },
  {
    $project: {
      _id: 0,
      topic_name: 1,
      session_date: 1,
      tasks: {
        $filter: {
          input: "$tasks",
          as: "task",
          cond: {
            $and: [
              { $gte: ["$$task.submission_date", "2020-10-01"] },
              { $lte: ["$$task.submission_date", "2020-10-31"] }
            ]
          }
        }
      }
    }
  }
]);


  
  

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({
    date: {
      $gte: "2020-10-15",
      $lte: "2020-10-31"
    }
  })
  
  

// Find all the company drives and students who are appeared for the placement.
db.company_drives.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "user_id",
      as: "user_info"
    }
  },
  {
    $match: {
      $or: [
        { user_appeared: true },
        { company_appeared: true }
      ]
    }
  },
  {
    $project: {
      company_id: 1,
      company_name: 1,
      date: 1,
      user_info: {
        $cond: {
          if: { $eq: ["$user_appeared", true] },
          then: { $arrayElemAt: ["$user_info", 0] },
          else: null
        }
      }
    }
  }
]);

  

  db.company_drives.find({company_appeared:true})

// Find the number of problems solved by the user in codekata
db.codekata.aggregate([
  {
    $group: {
      _id: "$user_id",
      problems_solved: { $sum: { $cond: ["$solved", 1, 0] } },
      total_problems: { $sum: 1 } // field to count problems attempted
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
      problems_solved: 1,
     total_problems: 1 // Include the field in the projected output
    }
  }
]);

  
  

// Find all the mentors with who has the mentee's count more than 15
db.mentors.find({ mentee_count: { $gt: 15 } })
  

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.tasks.aggregate([
  {
    $match: {
      submission_date: {
        $gte: "2020-10-15",
        $lte: "2020-10-31"
      },
      submited: false
    }
  },
  {
    $group: {
      _id: "$user_id"
    }
  },
  {
    $group: {
      _id: null,
      task_not_submitted_count: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "attendance",
      pipeline: [
        {
          $match: {
            present: false,
            session_date: {
              $gte: "2020-10-15",
              $lte: "2020-10-31"
            }
          }
        },
        {
          $group: {
            _id: "$user_id"
          }
        },
        {
          $group: {
            _id: null,
            attendance_absent_count: { $sum: 1 }
          }
        },
        {
          $project: {
            _id: 0,
            attendance_absent_count: 1
          }
        }
      ],
      as: "attendance"
    }
  },
  {
    $project: {
      _id: 0,
      task_not_submitted_count: 1,
      attendance_absent_count: { $arrayElemAt: ["$attendance.attendance_absent_count", 0] }
    }
  }
]);

    

