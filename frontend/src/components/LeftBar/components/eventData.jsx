// Events for the dummy calendar
const eventData = {
  events: [
    //sun
    {
      title: "Hockey Game",
      start: "2023-04-30T10:00:00Z",
      end: "2023-04-30T11:00:00Z",
    },
    //mon
    {
      id: 0,
      title: "Lunch",
      participants: "Kobe",
      start: "2023-05-01T12:00:00Z",
      end: "2023-05-01T14:00:00Z",
    },
    {
      id: 1,
      title: "Hockey Practice",
      start: "2023-05-01T14:00:00Z",
      end: "2023-05-01T15:00:00Z",
    },
    //tues
    {
      title: "Hockey Practice",
      start: "2023-05-02T12:00:00Z",
      end: "2023-05-02T13:00:00Z",
    },
    {
      title: "Digital Culture",
      start: "2023-05-02T13:00:00Z",
      end: "2023-05-02T17:00:00Z",
      tags: ["lecture"],
    },
    //wed
    {
      title: "Hockey Game",
      start: "2023-05-03T10:00:00Z",
      end: "2023-05-03T11:00:00Z",
    },
    {
      title: "UX Basics",
      start: "2023-05-03T11:00:00Z",
      end: "2023-05-03T15:00:00Z",
      tags: ["lecture"],
    },
    {
      title: "Macroeconomics",
      start: "2023-05-03T15:00:00Z",
      end: "2023-05-03T16:00:00Z",
      tags: ["test"],
    },
    {
      title: "Office Hours",
      start: "2023-05-03T16:30:00Z",
      end: "2023-05-03T17:00:00Z",
      tags: ["Digital Cultures"],
    },
    {
      title: "Family Dinner",
      start: "2023-05-03T18:00:00Z",
      end: "2023-05-03T20:00:00Z",
      tags: ["food", "famliy", "dinner"],
    },
    //thurs
    {
      title: "Driving Range",
      start: "2023-05-04T14:00:00Z",
      end: "2023-05-04T15:00:00Z",
    },
    {
      title: "Gym",
      start: "2023-05-04T18:00:00Z",
      end: "2023-05-04T21:00:00Z",
      tags: ["gym"],
    },
    //fri
    {
      title: "Dummy Placeholder for Complex Event",
      start: "2023-05-05T12:00:00Z",
      end: "2023-05-05T23:59:00Z",
    },
    //sat
    {
      title: "Driving Range",
      start: "2023-05-06T14:00:00Z",
      end: "2023-05-06T15:00:00Z",
    },
    {
      title: "Gym",
      start: "2023-05-06T18:00:00Z",
      end: "2023-05-06T21:00:00Z",
      tags: ["gym"],
    },
  ],
  days: 7,
  hours: 24,
};

//Friday
// Sleep
// 12:00 8:00
// Morning Routine
// 8:00 8:30
// - play music
// - remove contacts
// - drink water
// - take meds
// - brush teeth
// - wash face
// - moisturize
// - check calendar
// Go to Cafe
// 8:30 8:50
// !Home
// !! Fifty Two Cantlay Crescent
// @Cafe N One
// #travel
// Breakfast
// 8:50 9:50
// !Cafe N One
// Work on Startup
// 9:50 11:20
// #work
// - 1 hr work
// - 15 minute beak
// - 1 hr work
// - 15 min break
// Lunch
// #food
// @michael chan @katherine ma
// !Cafe N One 11:30 1:30
// Work on Startup
// 1:30 5:00
// #work
// - 1 hr work
// - 15 minute beak
// - 1 hr work
// - 15 min break
// - 1 hr work
// - just fake a work breakdown from Jira
// Go Home
// 5:00 5:20
// #travel
// !Cafe N One
// !Home
// !! Fifty Two Cantlay Crescent
// Practice Guitar
// - 5:30 6:30
// Go To Exercise
// 6:30 7:00
// !home
// !aanin
// Volleyball/Basketball
// #exercise
// 7:00 9:00
// Dinner
// 9:00 10:00
// Go Home
// 10:00 10:30
// !aanin
// !home
// Shower
// 10:30 11:00
// Gaming
// 11:00 12:00
// Nightime Routine
// 12:00 12:30
//

export default eventData;
