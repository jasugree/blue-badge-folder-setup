let express = require("express");
let router = express.Router();
let validateSession = require("../middleware/validate-session");
const Log = require("../db").import("../models/log");

router.get("/practice", validateSession, function (req, res) {
	res.send("Hey!! This is an practice route numb nuts");
});

/*CREATE LOG END POINT --> Allows users to create a workout log with descriptions, definitions, results, and owner properties.
 */

router.post("/", validateSession, (req, res) => {
	const logEntry = {
		description: req.body.log.description,
		definition: req.body.log.definition,
		result: req.body.log.result,
		owner_id: req.user.id,
	};
	Log.create(logEntry)
		.then((log) => res.status(200).json(log))
		.catch((err) => res.status(500).json({ error: err }));
});

/*VIEW ALL LOGS FOR USER -->	Gets all logs for an individual user.
 */

router.get("/", validateSession, (req, res) => {
	let userid = req.user.id;
	Log.findAll({
		where: { owner_id: userid },
	})
		.then((logs) => res.status(200).json(logs))
		.catch((err) => res.status(500).json({ error: err }));
});

/* FIND LOG BY ID FOR SPECIFIC USER -->	Gets individual logs by id for an individual user.
 */

router.get("/:id", validateSession, (req, res) => {
	Log.findOne({ where: { id: req.params.id, owner_id: req.user.id } }).then(
		(log) => {
			if (log) {
				res.status(200).json({
					log: log,
				});
			} else {
				res.status(500).json({
					message: "Data not found.",
				});
			}
		}
	);
});

/* UPDATE LOG -->Allows individual logs to be updated by a user.
 */

router.put("/:id", validateSession, (req, res) => {
	Log.update(
		{
			description: req.body.log.description,
			definition: req.body.log.definition,
			result: req.body.log.result,
		},
		{
			where: {
				id: req.params.id,
				owner_id: req.user.id,
			},
		}
	).then(
		function updateSuccess(log) {
			if (log[0]) {
				res.status(200).json({
					log: log,
					message: "Successfully updated.",
				});
			} else {
				res.status(403).json({
					message: "There is no log with that ID, Please try again.",
				});
			}
		},

		function updateFail(err) {
			res.status(500).json({
				message: err.message,
			});
		}
	);
});

/*DELETE WORK OUT --> Allows individual logs to be deleted by a user.
 */

router.delete("/:id", validateSession, (req, res) => {
	Log.destroy({
		where: {
			id: req.params.id,
			owner_id: req.user.id,
		},
	}).then(
		function deleteSuccess(log) {
			if (log) {
				res.status(200).json({
					log: log,
					message: "Successfully updated the workout.",
				});
			} else {
				res.status(403).json({
					message: "There is no log with that ID, Please try again.",
				});
			}
		},

		function deleteFail(err) {
			res.status(500).json({
				error: err.message,
			});
		}
	);
});

module.exports = router;
