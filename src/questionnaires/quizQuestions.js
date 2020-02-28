var quizQuestions = [

/*
  Part 1: INTRO 
*/

  {
      question: "You are:",
      answers: [
          {
              type: "GenderM",
              content: "Male"
          },
          {
              type: "GenderF",
              content: "Female"
          }
          
      ],
      qtype: "quiz",
      questionId: 1,
      surveytag: 'intro', 
      title: 'Introduction',
      constraint: [
        {min: ""},
        {max: ""}
      ] 
  },
  {
      question: "You are:",
      answers: [
          {
              type: "HandR",
              content: "Right-handed"
          },
          {
              type: "HandL",
              content: "Left-handed"
          },
      ],
      questionId: 2,
      surveytag: 'intro',
      title: 'Introduction',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },
  {
      question: "Please, indicate your age (in years)",
      answers: [{
        type: "age",
        content: " "
      }],
      qtype: 'report',
      questionId: 3,
      surveytag: 'intro',
      title: 'Introduction',
      constraint: [
        {min: "17.99999"},
        {max: "100"}
      ]

  },
  
  {
      question: "Please, report your ACTUAL weight (lb)",
      answers: [
        {
          type: "actual-weight ",
          content: " ",
        }],
      
      qtype: 'report',
      questionId: 4,
      surveytag: 'intro',
      title: 'Introduction',
      constraint: [

        // {min: "35"},
        // {max: "595"}

        {min: "77"},
        {max: "1312"}
      ]

  },
  {   
      question:"Are you sure about your previous answer?",
      
      answers: [{
        type: "Conf-actual-weight-sure",
        content: "Sure"},

        {
        type: "Conf-actual-weight-unsure",
        content: "Not sure"}
      ],
      qtype: 'quiz',
      questionId: 5,
      surveytag: 'intro',
      title: 'Introduction',
      constraint: [
       {min: ""},
      {max: ""}
      ]

  },

  
  {
      question: "Please, report your ACTUAL height (inch)?",
      answers: [{
          type: "actual-height",
          content: " ",
        }],
      qtype: 'report',
      questionId: 6,
      surveytag: 'intro',
      title: 'Introduction',
      constraint: [
        {min: "21.2"},
        {max: "105.1"}
      
        // {min: "54.6"}, for cm 
        // {max: "267"}
    
      ]

  }, 

  {   
      question:"Are you sure about your previous answer?",
      
      answers: [{
        type: "Conf-actual-height-sure",
        content: "Sure"},

        {type: "Conf-actual-height-unsure",
        content: "Not sure"}
      ],
      qtype: 'quiz',
      questionId: 7,
      surveytag: 'intro',
      title: 'Introduction',
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

/*
  Part 2: ADULTHOOD 
*/
{   
      question:"During the last few years I have had enough money to the things I wanted",
      
      answers: [{
        type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree"},

        {type: "answer-3",
        content: "Agree a little"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree a little"},

        {type: "answer-6",
        content: "Disagree"},

        {type: "answer-7",
        content: "Disagree strongly"},
      ],
      qtype: 'quiz',
      questionId: 8,
      surveytag: 'adulthood',
      title: 'Adult Life: economic situation', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"During the last few years I have not needed to worry too much about paying my bills ",
      
      answers: [{
        type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree"},

        {type: "answer-3",
        content: "Agree a little"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree a little"},

        {type: "answer-6",
        content: "Disagree"},

        {type: "answer-7",
        content: "Disagree strongly"},
      ],
      qtype: 'quiz',
      questionId: 9,
      surveytag: 'adulthood',
      title: 'Adult Life: economic situation', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"During the last few years I have felt relatively wealthy compared to other people around me",
      
      answers: [{
        type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree"},

        {type: "answer-3",
        content: "Agree a little"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree a little"},

        {type: "answer-6",
        content: "Disagree"},

        {type: "answer-7",
        content: "Disagree strongly"},
      ],
      qtype: 'quiz',
      questionId: 10,
      surveytag: 'adulthood',
      title: 'Adult Life: economic situation', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


{   
      question:"Do you currently receive an income for one or more professional activities?",
      
      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"}
        
      ],
      qtype: 'quiz',
      questionId: 11,
      surveytag: 'adulthood',
      title: 'Adult Life: economic situation', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"What is the total net income you received on your bank account last month (in pounds) for all your professional activities? We are prohibited from communicating this information to third parties, such as tax authorities",
      
      answers: [],
      qtype: 'report',
      questionId: 12,
      surveytag: 'adulthood',
      title: 'Adult Life: economic situation', 
      constraint: [
       {min: -1},
       {max: 100000000}
      ]

  },


  {   
      question:"Your highest level of education attained: ",
      
      answers: [
      
        {type: "answer-1",
        content: "Trade/technical school"},

        {type: "answer-2",
        content: "Post graduate"},  

        {type: "answer-3",
        content: "Completed college"}, 

        {type: "answer-4",
        content: "Some college"},

        {type: "answer-5",
        content: "Completed high school"},

        {type: "answer-6",
        content: "Some high school or less"},
      ],
      qtype: 'quiz',
      questionId: 13,
      surveytag: 'adulthood',
      title: 'Adult Life: education', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

{
  question:"How many OLDER siblings did you ever had? ",
      
      answers: [],
      qtype: 'report',
      questionId: 14,
      surveytag: 'adulthood',
      title: 'Adult Life: siblings', 
      constraint: [
       {min: -1},
       {max: 30}
      ]

  },


{
  question:"How many YOUNGER siblings did you ever had? ",
      
      answers: [],
      qtype: 'report',
      questionId: 15,
      surveytag: 'adulthood',
      title: 'Adult Life: siblings', 
      constraint: [
       {min: -1},
       {max: 30}
      ]

  },

/*
  Part 3: CHILDHOOD 
*/

{   
      question:"The level of education attained by your FATHER at that time: ",
      
      answers: [

        {type: "answer-1",
        content: "Trade/technical school"},

        {type: "answer-2",
        content: "Post graduate"},  

        {type: "answer-3",
        content: "Completed college"}, 

        {type: "answer-4",
        content: "Some college"},

        {type: "answer-5",
        content: "Completed high school"},

        {type: "answer-6",
        content: "Some high school or less"},

        {type: "answer-7",
        content: "Not applicable"},
    
      ],
      qtype: 'quiz',
      questionId: 16,
      surveytag: 'childhood',
      title: 'Childhood: parental education', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


{   
      question:"The level of education attained by your MOTHER at that time: ",
      
      answers: [

        {type: "answer-1",
        content: "Trade/technical school"},

        {type: "answer-2",
        content: "Post graduate"},  

        {type: "answer-3",
        content: "Completed college"}, 

        {type: "answer-4",
        content: "Some college"},

        {type: "answer-5",
        content: "Completed high school"},

        {type: "answer-6",
        content: "Some high school or less"},

        {type: "answer-7",
        content: "Not applicable"},

      ],
      qtype: 'quiz',
      questionId: 17,
      surveytag: 'childhood',
      title: 'Childhood: parental education', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:" When I was younger than 12 ... I had a set morning routine on school days (I usually did the same thing each day to get ready). ",
      
      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 18,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:" When I was younger than 12 ... My parents kept track of what I ate (made sure that I did not skip meals or tried to make sure I ate healthy foods). ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 19,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:" When I was younger than 12 ... My family ate a meal together most days. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 20,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:" When I was younger than 12 ... My parents tried to make sure I got a good night sleep (e.g. I had a regular bedtime, my parents checked to make sure I went to sleep). ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 21,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... I had a bedtime routine (e.g. my parents tucked me in, my parents read me a book, I took a bath). ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 22,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... In my afterschool or free time hours at least one of my parents knew what I was doing. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 23,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... At least one of my parents regulalry checked that I did my homework. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 24,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... At least one of my parents regulalry kept track of my school progress. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 25,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... At least one parent made time each day to see how I was doing. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 26,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... My parents were often late to pick me up (e.g. from school, aftercare or sports). ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 27,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... I usually knew when my parents were going to be home. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 28,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... At least one of my parents had punishments that were unpredictable. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 29,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I often wondered whether or not one of my parents would come home at the end of the day. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 30,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... My family planned activities to do together. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 31,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... At least one of my parents would plan something for the family, but then not follow through with the plan. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 32,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... My family had holliday tradition that we did every year (e.g. cooking a special food at a particular time of year/decorate the house the same way). ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 33,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... At least one of my parents was disorganizied. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 34,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... At least one of my parents was unpredictable. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 35,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... For at least one of my parents, when they were upset I did not know how they would act. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 36,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... One of my parents could go from calm to furious in an instant. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 37,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... One of my parents could go from calm to stressed or nervous in an instant. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 38,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

{   
      question:"When I was younger than 12 ... There was a long period of time when I did not see one of my parents (e.g. military deployment, jail time, custody arrangements). ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 39,
      surveytag: 'childhood',
      title: 'Childhood: parental environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I experienced changes in my custody arrangements. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 40,
      surveytag: 'childhood',
      title: 'Childhood: parental environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... At least one of my parents changed jobs frequently. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 41,
      surveytag: 'childhood',
      title: 'Childhood: parental environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... There were time when one of my parents was unemployed and couldn't find a job even though he/she wanted one.", 
      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 42,
      surveytag: 'childhood',
      title: 'Childhood: parental environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... My parents had a stable relationships with each other. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 43,
      surveytag: 'childhood',
      title: 'Childhood: parental environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... My parents got divorced. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 44,
      surveytag: 'childhood',
      title: 'Childhood: parental environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... At least one of my parents had many romantic partners. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 45,
      surveytag: 'childhood',
      title: 'Childhood: parental environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... There were ofen people coming and going in my house that I did not expect to be there. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 46,
      surveytag: 'childhood',
      title: 'Childhood: physical environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


   {   
      question:"When I was younger than 12 ... I moved frequently. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 47,
      surveytag: 'childhood',
      title: 'Childhood: physical environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I changed schools frequently. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 48,
      surveytag: 'childhood',
      title: 'Childhood: physical environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I changed schools mid-year. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 49,
      surveytag: 'childhood',
      title: 'Childhood: physical environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I lived in a clean house. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 50,
      surveytag: 'childhood',
      title: 'Childhood: physical environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... I lived in a cluttered house (e.g. piles of stuff everywhere). ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 51,
      surveytag: 'childhood',
      title: 'Childhood: physical environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... In my house things I needeed were often misplaced so that I could not find them. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 52,
      surveytag: 'childhood',
      title: 'Childhood: physical environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... There was a period of time when I often worried that I was not going to have enough food to eat. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 53,
      surveytag: 'childhood',
      title: 'Childhood: safety and security', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... There was a period of time where I did not feel safe in my house. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 54,
      surveytag: 'childhood',
      title: 'Childhood: safety and security', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I have suffered from sexual or physical abuse. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 55,
      surveytag: 'childhood',
      title: 'Childhood: safety and security', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... My family usually had enough money for things when I was growing up. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 56,
      surveytag: 'childhood',
      title: 'Childhood: safety and security', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I grew up in a relatively wealthy neighborhood. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 57,
      surveytag: 'childhood',
      title: 'Childhood: safety and security', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I felt relatively wealthy compared to other kids in my school. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 58,
      surveytag: 'childhood',
      title: 'Childhood: safety and security', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I've had to deal with the death of my father (biological/adoptive).", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 59,
      surveytag: 'childhood',
      title: 'Childhood: loss of a loved one', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I've had to deal with the death of my mother (biological/adoptive).", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 60,
      surveytag: 'childhood',
      title: 'Childhood: loss of a loved one', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  }, 

  {   
      question:"When I was younger than 12 ... I've had to deal with the death of a sibling (biological/adoptive).", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 61,
      surveytag: 'childhood',
      title: 'Childhood: loss of a loved one', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
}, 


{   
      question:"When I was younger than 12 ... I've had to deal with the death of another member of my close family (biological/adoptive).", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 62,
      surveytag: 'childhood',
      title: 'Childhood: loss of a loved one', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
}, 

{   
      question:"When I was younger than 12 ... I've had to deal with the death of another family member of a friend.", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 63,
      surveytag: 'childhood',
      title: 'Childhood: loss of a loved one', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
}, 


{   
      question:"When I was younger than 12 ... I've had to deal with the death of another person who was part of my daily environment.", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 64,
      surveytag: 'childhood',
      title: 'Childhood: loss of a loved one', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
}, 


/*
  Part 4: Reproductive development 
*/

{   
      question:"For female participants: at what age did you reach puberty? That is, at what age (in years) did you have your first period?", 

      answers: [
        {
          type: "answer-na",
          content: "Not applicable"}
        ],
      qtype: 'report-na',
      questionId: 65,
      surveytag: 'repdevelop',
      title: 'Reproductive development', 
      constraint: [
       {min: 5},
       {max: 100}
      ]
}, 


{   
      question:"For male participants: at what age did you reach puberty? That is, at what age did your voice begin to change, at what age did you notice the appearance of hairs or acne?", 

      answers: [
        {
          type: "answer-na",
          content: "Not applicable"}
        ],
      qtype: 'report-na',
      questionId: 66,
      surveytag: 'repdevelop',
      title: 'Reproductive development', 
      constraint: [
       {min: 5},
       {max: 100}
      ]
}, 


{   
      question:"At what age did you have your first consented sexual intercourse?", 

      answers: [
        {
          type: "answer-na",
          content: "Not applicable"}
        ],
      qtype: 'report-na',
      questionId: 67,
      surveytag: 'repdevelop',
      title: 'Reproductive development', 
      constraint: [
       {min: 0},
       {max: 999}
      ]
}, 


{   
      question:"Do you have (biological) children?", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"}
      ],
      qtype: 'quiz',
      questionId: 68,
      surveytag: 'repdevelop',
      title: 'Reproductive development', 
      constraint: [
       {min: -1},
       {max: 100}
      ]
  },


  {   
      question:"How many children do you have?", 

      answers: [
        {
          type: "answer-na",
          content: "Not applicable"}
        ],
      qtype: 'report', 
      questionId: 69,
      surveytag: 'repdevelop',
      title: 'Reproductive development', 
      constraint: [
       {min: -1},
       {max: 20}
      ]
}, 


{   
      question:"At what age did you have your first child?", 
      answers: [
        {
          type: "answer-na",
          content: "Not applicable"}
        ],
      qtype: 'report-na',
      questionId: 70,
      surveytag: 'repdevelop',
      title: 'Reproductive development', 
      constraint: [
       {min: 0},
       {max: 999}
      ]
}, 

/*
  Part 5: HEALTH 
*/

{   
      question:"How is your health in general?", 

      answers: [{
        type: "answer-1",
        content: "Excellent"},
      
        {type: "answer-2",
        content: "Very Good"},

        {type: "answer-3",
        content: "Good"},

        {type: "answer-4",
        content: "Fair"}, 

        {type: "answer-5",
        content: "Poor"}, 

        {type: "answer-6",
        content: "Very poor"},

      ],
      qtype: 'quiz',
      questionId: 71,
      surveytag: 'health',
      title: 'Health', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


{   
      question:"How much effort do you make to look after your health and ensure your safety these days?", 

      answers: [{
        type: "answer-1",
        content: "A great deal"},
      
        {type: "answer-2",
        content: "A lot"},

        {type: "answer-3",
        content: "A moderate amount"},

        {type: "answer-4",
        content: "A little"},

        {type: "answer-5",
        content: "None at all"}
      ],
      qtype: 'quiz',
      questionId: 72,
      surveytag: 'health',
      title: 'Health', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


  {   
      question:"In total, during how many years did you smoke daily or almost daily?", 

      answers: [
        {
          type: "answer-na",
          content: "I never smoked"}
        ],
      qtype: 'report-na',
      questionId: 73,
      surveytag: 'health',
      title: 'Health', 
      constraint: [
       {min: 0},
       {max: 100}
      ]
  },


  {   
      question:"When you were younger than 12 ... How often did you miss school due to illness ?", 

      answers: [{
        type: "answer-1",
        content: "Very often"},
      
        {type: "answer-2",
        content: "Often"},

        {type: "answer-3",
        content: "Sometimes"},

        {type: "answer-4",
        content: "Rarely"}, 

        {type: "answer-5",
        content: "Never or practically never"} 
      ],
      qtype: 'quiz',
      questionId: 74,
      surveytag: 'health',
      title: 'Health', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


  {   
      question:"When you were younger than 12 ... How was your health in general at that time?", 

      answers: [{
        type: "answer-1",
        content: "Excellent"},
      
        {type: "answer-2",
        content: "Very Good"},

        {type: "answer-3",
        content: "Good"},

        {type: "answer-4",
        content: "Fair"}, 

        {type: "answer-5",
        content: "Poor"}, 

        {type: "answer-6",
        content: "Very poor"},
        
      ],
      qtype: 'quiz',
      questionId: 75,
      surveytag: 'health',
      title: 'Health', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


  // closing the JSON 


];

export default quizQuestions;
