const initialState = {
  currentPage: 1,
  profile: {},
  education: [],
  skills: [],
  projects: [],
  social: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "NEXT":
      return { ...state, currentPage: state.currentPage + 1 };

    case "BACK":
      return { ...state, currentPage: state.currentPage - 1 };

    case "SAVE_PROFILE":
      return { ...state, profile: action.payload };

    case "ADD_EDUCATION":
      return { ...state, education: [...state.education, action.payload] };

    case "DELETE_EDUCATION":
      return { ...state, education: state.education.slice(0, -1) };

    case "ADD_SKILL":
      return { ...state, skills: [...state.skills, action.payload] };

    case "DELETE_SKILL":
      return { ...state, skills: state.skills.slice(0, -1) };

    case "ADD_PROJECT":
      return { ...state, projects: [...state.projects, action.payload] };

    case "DELETE_PROJECT":
      return { ...state, projects: state.projects.slice(0, -1) };

    case "ADD_SOCIAL":
      return { ...state, social: [...state.social, action.payload] };

    default:
      return state;
  }
}
