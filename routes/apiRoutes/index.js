const router = require('express').Router();
const notesRoutes = require('../apiRoutes/notes');

router.use(notesRoutes);
router.use(zookeeperRoutes);

module.exports = router;
