const login = require('../api/login');

module.exports = router => {
  router.post('/login', login)

  return router;
}
