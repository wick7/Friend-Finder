var tableData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/tables", function (req, res) {
        res.json(tableData);
    });

    app.post("/api/tables", function (req, res) {

        tableData.push(req.body);
        // res.json(true);

        
    });
}