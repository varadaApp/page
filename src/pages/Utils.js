import namor from 'namor';
import './table.css';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single',
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson),
    };
  });
}

export function trainingData() {
  const trainings = [{ name: 'AWS' }];
  return trainings;
}
export function certData() {
  const certifications = [{ name: 'Security+' }];
  return certifications;
}

export function careerTrackData() {
  const careerTracks = [
    {
      careerTrackName: 'Cyber IA',
      programName: 'AWS Technical Support Program',
      locationName: 'Washington DC',
      clearanceLevel: 'EOD SUITABILITY / TS/SCI',
      programManagerName: 'Eladia Calderon',
      careerTrackTier: 2,
    },
  ];

  return careerTracks;
}

export function positionSearchData() {
  const careerTracks = [
    {
      positionTitle: 'IA Supervisor',
      careerTrackName: 'Cyber IA',
      programName: 'DoD Space Program',
      locationName: 'Fort Belvoir VA',
      clearanceLevel: 'TS/SCI',
      programManagerName: 'Dodie Crowther',
      careerTrackTier: 2,
    },
  ];

  return careerTracks;
}

export function enhancementSearchData() {
  const careerEnhancements = [
    {
      positionTitle: '',
      careerTrackName: 'Cyber IA',
      programName: 'DoD Space Program',
      locationName: 'Fort Belvoir VA',
      clearanceLevel: 'TS/SCI',
      programManagerName: 'Dodie Crowther',
      careerTrackTier: 2,
      enhancementType: 1,
      futureDate: '2/1/2020',
      duration: '1 month',
    },
  ];

  return careerEnhancements;
}

export function employeesWithSelectedCareerTrackData() {
  const employees = [
    {
      employeeName: 'Sharyn Ballard',
      careerTrackName: 'Software Developer',
      careerTrackTier: 2,
      desiredCareerTrack: 'Network Engineer Tier 2',
      desiredCareerTrackCompletionDate: '3/1/2020',
      inProgressCertifications: {
        progress: 'Green',
        name: 'Security+',
      },
      inProgressTrainings: {
        progress: 'Green',
        name: 'Leadership',
      },
    },
    {
      employeeName: 'Romeo Thompson',
      careerTrackName: 'Program Ops (Technical)',
      careerTrackTier: 2,
      desiredCareerTrack: 'Program Ops (Technical) Tier 3',
      desiredCareerTrackCompletionDate: '4/17/2020',
      inProgressCertifications: {
        progress: 'Red',
        name: 'AWS',
      },
      inProgressTrainings: {
        progress: 'Red',
        name: 'Leadership',
      },
    },
    {
      employeeName: 'Chere Nance',
      careerTrackName: 'Program Ops (Technical)',
      careerTrackTier: 2,
      desiredCareerTrack: 'Program Ops (Technical) Tier 3',
      desiredCareerTrackCompletionDate: '5/21/2020',
      inProgressCertifications: {
        progress: 'Green',
        name: 'AWS',
      },
      inProgressTrainings: {
        progress: 'Red',
        name: 'Leadership',
      },
    },
    {
      employeeName: 'Kami Najera',
      careerTrackName: 'Program Ops (Technical)',
      careerTrackTier: 2,
      desiredCareerTrack: 'Program Ops (Technical) Tier 3',
      desiredCareerTrackCompletionDate: '5/27/2020',
      inProgressCertifications: {
        progress: 'Red',
        name: 'AWS',
      },
      inProgressTrainings: {
        progress: 'Green',
        name: 'Database',
      },
    },
    {
      employeeName: 'Darryl Merryman',
      careerTrackName: 'Program/Project Management',
      careerTrackTier: 3,
      desiredCareerTrack: 'Program/Project Management Tier 4',
      desiredCareerTrackCompletionDate: '6/1/2020',
      inProgressCertifications: {
        progress: 'Red',
        name: 'AWS',
      },
      inProgressTrainings: {
        progress: 'Green',
        name: 'Programming',
      },
    },
    {
      employeeName: 'Brigitte Weiland',
      careerTrackName: 'Program Ops (Technical)',
      careerTrackTier: 2,
      desiredCareerTrack: 'Program Ops (Technical) Tier 3',
      desiredCareerTrackCompletionDate: '6/11/2020',
      inProgressCertifications: {
        progress: 'Green',
        name: 'Security+',
      },
      inProgressTrainings: {
        progress: 'Green',
        name: 'Database',
      },
    },
    {
      employeeName: 'Emmitt Dugas',
      careerTrackName: 'Software Development',
      careerTrackTier: 2,
      desiredCareerTrack: 'Software Development Tier 3',
      desiredCareerTrackCompletionDate: '6/23/2020',
      inProgressCertifications: {
        progress: 'Red',
        name: 'Oracle',
      },
      inProgressTrainings: {
        progress: 'Yellow',
        name: 'Leadership',
      },
    },
    {
      employeeName: 'August Stanger',
      careerTrackName: 'Software Development',
      careerTrackTier: 2,
      desiredCareerTrack: 'Software Development Tier 3',
      desiredCareerTrackCompletionDate: '7/17/2020',
      inProgressCertifications: {
        progress: 'Red',
        name: 'AWS',
      },
      inProgressTrainings: {
        progress: 'Green',
        name: 'Programming',
      },
    },
    {
      employeeName: 'Chia Villalba',
      careerTrackName: 'Software Development',
      careerTrackTier: 2,
      desiredCareerTrack: 'Software Development Tier 3',
      desiredCareerTrackCompletionDate: '7/20/2020',
      inProgressCertifications: {
        progress: 'Yellow',
        name: 'Security+',
      },
      inProgressTrainings: {
        progress: 'Green',
        name: 'Leadership',
      },
    },
    {
      employeeName: 'Hipolito Gooden',
      careerTrackName: 'Software Development',
      careerTrackTier: 2,
      desiredCareerTrack: 'Software Development Tier 3',
      desiredCareerTrackCompletionDate: '7/25/2020',
      inProgressCertifications: {
        progress: 'Green',
        name: 'AWS',
      },
      inProgressTrainings: {
        progress: 'Red',
        name: 'Database',
      },
    },
    {
      employeeName: 'Enoch Hector',
      careerTrackName: 'Software Development',
      careerTrackTier: 2,
      desiredCareerTrack: 'Software Development Tier 3',
      inProgressCertifications: {
        progress: 'Green',
        name: 'AWS',
      },
      inProgressTrainings: {
        progress: 'Yellow',
        name: 'Leadership',
      },
    },
    {
      employeeName: 'Nicolas Hadlock',
      careerTrackName: 'Software Development',
      careerTrackTier: 2,
      desiredCareerTrack: 'Software Development Tier 3',
      inProgressCertifications: {
        progress: 'Yellow',
        name: 'AWS',
      },
      inProgressTrainings: {
        progress: 'Yellow',
        name: 'Leadership',
      },
    },
    {
      employeeName: 'Brock Brauer',
      careerTrackName: 'Software Development',
      careerTrackTier: 2,
      desiredCareerTrack: 'Software Development Tier 3',
      inProgressCertifications: {
        progress: 'Yellow',
        name: 'AWS',
      },
      inProgressTrainings: {
        progress: 'Yellow',
        name: 'Programming',
      },
    },
    {
      employeeName: 'Phyliss Kaplan',
      careerTrackName: 'Software Development',
      careerTrackTier: 2,
      desiredCareerTrack: 'Software Development Tier 3',
      inProgressCertifications: {
        progress: 'Red',
        name: 'AWS',
      },
      inProgressTrainings: {
        progress: 'Yellow',
        name: 'Database',
      },
    },
    {
      employeeName: 'Nickie Buie',
      careerTrackName: 'Systems Administration',
      careerTrackTier: 1,
      desiredCareerTrack: 'Systems Administration Tier 2',
      inProgressCertifications: {
        progress: 'Green',
        name: 'AWS',
      },
      inProgressTrainings: {
        progress: 'Yellow',
        name: 'Leadership',
      },
    },
  ];
  return employees;
}

export function programEmployees() {
  const employees = [
    {
      progressStatus: 'Yellow',
      employeeName: 'Sharyn Ballard',
      locationName: 'Washington, DC',
      careerTrackName: ' Software Developer',
      careerTrackTier: 2,
    },
    {
      progressStatus: 'Red',
      employeeName: 'Romeo Thompson',
      locationName: 'Washington, DC',
      careerTrackName: 'Program Ops (Technical)',
      careerTrackTier: 2,
      progressInformation: 'Applied to Position',
    },
    {
      progressStatus: 'Red',
      employeeName: 'Chere Nance',
      locationName: 'Washington, DC',
      careerTrackName: 'Program Ops (Technical)',
      careerTrackTier: 2,
      progressInformation: 'Interested in Career Enhancement Opportunity',
    },
    {
      progressStatus: 'Red',
      employeeName: 'Darryl Merryman',
      locationName: 'Washington, DC',
      careerTrackName: 'Program/Project Management',
      careerTrackTier: 3,
      progressInformation: 'Selected a New Primary Career Track',
    },
    {
      progressStatus: 'Green',
      employeeName: 'Chia Villalba',
      locationName: 'Washington, DC',
      careerTrackName: 'Software Development',
      careerTrackTier: 2,
    },
    {
      progressStatus: 'Red',
      employeeName: 'Hipolito Gooden',
      locationName: 'Washington, DC',
      careerTrackName: 'Software Development',
      careerTrackTier: 2,
      progressInformation: 'Showed interest in Splunk Training',
    },
    {
      progressStatus: 'Red',
      employeeName: 'Nicolas Hadlock',
      locationName: 'Washington, DC',
      careerTrackName: 'Software Development',
      careerTrackTier: 2,
      progressInformation: 'Showed interest in Splunk Training',
    },
    {
      progressStatus: 'Red',
      employeeName: 'Brock Brauer',
      locationName: 'Washington, DC',
      careerTrackName: 'Software Development',
      careerTrackTier: 2,
      progressInformation: 'Interested in Career Enhancement Opportunity',
    },
    {
      progressStatus: 'Red',
      employeeName: 'Phyliss Kaplan',
      locationName: 'Washington, DC',
      careerTrackName: 'Software Development',
      careerTrackTier: 2,
      progressInformation: 'Applied to Position',
    },
  ];
  return employees;
}

export function employeeSearch() {
  const employees = [
    {
      employeeId: 1,
      employeeName: 'Dorris Vaught',
      clearanceLevel: 'NO-CLRNC',
      careerTrackName: 'Cyber IA Tier 2',
      programName: 'AWS Technical Support Program',
      locationName: 'Chantilly VA',
      programManagerName: 'RICHARD SMITH',
    },
  ];
  return employees;
}
