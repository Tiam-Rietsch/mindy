const baseAddress = "http://192.168.8.103:8080"

// authentication endpoing
const authEnpoint = baseAddress + "/mindyback/v1/auth"

// ======================= authentication endpoints
const othersBase = baseAddress + "/mindyback/v1/api"

/**
 * body: {
 *  email,
 *  motDePasse
 * } ==> JWT Token 
 * 
 */
export const loginEndpoint = authEnpoint + "/signin"


// ======================================= lessons endpoints
/**
 * header for the other urls
 * header: {
 *    Authorization: bearer JWT token
 * }
 */
const lessonsEndpoint = othersBase + "/lecons"

/**
 * body: Chapter {
 *   nom,
 *   description,
 *   objSpec
 * } ==> [{
 *   id,
 *   nom,
 *   desc,
 *   objSpec
 * }]
 */
export const createLessonEndpoint = lessonsEndpoint + "/create"
export const findLessonEndpoint = (id) => lessonsEndpoint + `/findById/${id}`


// ====================================== games
/**
 * header for the other urls
 * header: {
 *    Authorization: bearer JWT token
 * }
 * 
 *  game: {
 *     nom,
 *     description,
 *     isPassed,
 *     userResponse = null,
 *     correction: Obj = null
 *  }

 */
const gameEndpoint = othersBase + "/games"

/**
 * header
 * body: {lessonId} ==> [{
 *    ...game,
 *    aiQuestion,
 *    scenarioScene: {
 *      prompt (how is the image),
 *      pathToScene,
 *      // scenario
 *      // scenarioType
 *    }
 * }]
 */
export const createScenarioEndpoint = (id) => gameEndpoint + `/scenario/createbylecon/${id}`
export const createCommunicationEndpoint = (id) => gameEndpoint + `/communication/createbylecon/${id}`


/**
 * header,
 * body: {
 *    answer
 * } => Correction: Obj = {
 *    anaylsis: String 
 *    response: String
 * }
 * 
 */
export const correctionEndpoint = (id) => othersBase + `/corrections/corrigegame/${id}`

// ====================================== images
const ImageEndpoint = othersBase + "/images"

/**
 * header
 * body: {
 *   pathToScene: string
 * }
 */
export const getImageEndpoint = ImageEndpoint + "/find"
