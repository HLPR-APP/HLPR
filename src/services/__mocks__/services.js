const mockServiceService = {
  getAllTasks: jest.fn(),
  getTaskById: jest.fn(),
  getTasksByUser: jest.fn(),
  getTasksByEmail: jest.fn(),
  getOffersByTaskEmail: jest.fn(),
  getOffersByUser: jest.fn(),
  AddTask: jest.fn(),
  updateAcceptTask: jest.fn(),
  updateOfferAccepted: jest.fn(),
  deleteTaskById: jest.fn(),
  deleteOfferByID: jest.fn(),
  addOffer: jest.fn(),
  deleteUnacceptedOffers: jest.fn(),
};

export default mockServiceService;
