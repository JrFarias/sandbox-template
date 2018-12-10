
/**
 * @swagger
 * resourcePath: /login
 * description: All about API
 */

/**
 * @swagger
 * path: /login
 * operations:
 *   -  httpMethod: POST
 *      summary: Login with username and password
 *      notes: Returns a user based on username
 *      responseClass: User
 *      nickname: login
 *      consumes:
 *        - text/html
 *      parameters:
 *        - name: username
 *          description: Your username
 *          paramType: query
 *          required: true
 *          dataType: string
 *        - name: password
 *          description: Your password
 *          paramType: query
 *          required: true
 *          dataType: string
 */

module.exports = (ctx) => {
    ctx.body = {
     username: ctx.request.query.username,
     password: ctx.request.query.password
    }

    ctx.status = 200;
  };

  /**
   * @swagger
   * models:
   *   User:
   *     id: User
   *     properties:
   *       username:
   *         type: String
   *       password:
   *         type: String
   */
