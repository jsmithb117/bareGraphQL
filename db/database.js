const mockDB = {
  1: {
    id: 1,
    firstName: 'John',
    middleInitial: 'M',
    lastName: 'Smith',
    academicTitle: 'Associate Professor',
    title: 'Associate Professor',
    organization: 'University of California, San Diego',
    learners: 9324,
    courses: [
      {
        courseNumber: 1,
        isPrimaryInstructor: true,
      },
      {
        courseNumber: 2,
        isPrimaryInstructor: false,
      },
      {
        courseNumber: 3,
        isPrimaryInstructor: false,
      },
    ],
    instructorAverageRating: "4.5",
    numberOfRatings: 1836,
  },
  2: {
    id: 2,
    firstName: 'Jane',
    middleInitial: '',
    lastName: 'Doe',
    academicTitle: 'Associate Professor',
    title: 'Associate Professor',
    organization: 'University of California, San Diego',
    learners: 9234,
    courses: [
      {
        courseNumber: 1,
        isPrimaryInstructor: false,
      },
      {
        courseNumber: 2,
        isPrimaryInstructor: true,
      },
      {
        courseNumber: 4,
        isPrimaryInstructor: false,
      },
    ],
    instructorAverageRating: "4.5",
    numberOfRatings: 1836,
  },
  3: {
    id: 3,
    firstName: 'Bill',
    middleInitial: '',
    lastName: 'Gates',
    academicTitle: 'Associate Professor',
    title: 'Associate Professor',
    organization: 'University of California, San Diego',
    learners: 9234,
    courses: [
      {
        courseNumber: 1,
        isPrimaryInstructor: false,
      },
      {
        courseNumber: 2,
        isPrimaryInstructor: false,
      },
      {
        courseNumber: 3,
        isPrimaryInstructor: true,
      },
    ],
    instructorAverageRating: "4.5",
    numberOfRatings: 1836,
  },
  4: {
    id: 4,
    firstName: 'Peter',
    middleInitial: '',
    lastName: 'Griffin',
    academicTitle: 'Associate Professor',
    title: 'Associate Professor',
    organization: 'University of California, San Diego',
    learners: 9234,
    courses: [
      {
        courseNumber: 4,
        isPrimaryInstructor: true,
      },
      {
        courseNumber: 5,
        isPrimaryInstructor: true,
      },
      {
        courseNumber: 3,
        isPrimaryInstructor: false,
      },
    ],
    instructorAverageRating: "4.5",
    numberOfRatings: 1836,
  },
  5: {
    id: 5,
    firstName: 'John',
    middleInitial: '',
    lastName: 'Bishop',
    academicTitle: 'Associate Professor',
    title: 'Associate Professor',
    organization: 'University of California, San Diego',
    learners: 9234,
    courses: [
      {
        courseNumber: 1,
        isPrimaryInstructor: false,
      },
      {
        courseNumber: 2,
        isPrimaryInstructor: false,
      },
      {
        courseNumber: 3,
        isPrimaryInstructor: false,
      },
    ],
    instructorAverageRating: "4.5",
    numberOfRatings: 1836,
  },
  6: {
    id: 6,
    firstName: 'Jane',
    middleInitial: '',
    lastName: 'Bishop',
    academicTitle: 'Associate Professor',
    title: 'Associate Professor',
    organization: 'University of California, San Diego',
    learners: 9234,
    courses: [
      {
        courseNumber: 1,
        isPrimaryInstructor: false,
      },
      {
        courseNumber: 2,
        isPrimaryInstructor: false,
      },
      {
        courseNumber: 4,
        isPrimaryInstructor: false,
      },
    ],
    instructorAverageRating: "4.5",
  }
}

const getInstructor = (courseNumber) => {
  return new Promise((resolve, reject) => {
    resolve(mockDB[courseNumber]);
    reject(new Error('Error in getInstructor'));
  }
  )};


module.exports = {
  getInstructor
};