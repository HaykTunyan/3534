let express = require('express'),
    app = express();

let bodyparser = require('body-parser'),
    // { Sequelize } = require('sequelize'),
    _ = require('underscore'),
    axios = require('axios').default,
    xml_js = require('xml-js'),
    cors = require('cors'),
    path = require('path');

let env = process.env.NODE_ENV || 'production',
    config = require('./config.json')[env.trim()];

// let sequelize = new Sequelize(config.db_config),
//     machine = sequelize.define('machine', require('./machine_model'));


app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

let WhiteList = ['http://127.0.0.1:8000'];

app.use(cors({
    origin: function (origin, cb) {
        if (WhiteList.indexOf(origin) !== -1 || !origin) cb(null, true);
        else cb('CORS Blocked', false);
    }
}));



// sequelize.authenticate().then(function () {
//     console.log("Connection established successfully.");
// }).catch(function (err) {
//     console.log(err);
// });

// sequelize.sync({ force: false });




let FaulttoStringArray = (fault) => {
    if (fault.length > 0) return _.pluck(fault, '_text').join(', ');
    else return fault._text;
}



app.post('/insert', function (req, res) {
    axios.get('https://lib-mtconnect-cartridge.azurewebsites.net/assets').then(res => {

        let data = JSON.parse(xml_js.xml2json(res.data, { compact: true })).
            MTConnectAssets.Assets.HyperthermCartridge;

        let TempDataArray = [];

        for (let i = 0; i < data.length; i++) {
            let new_data = {
                manufacturer: data[i]._attributes.manufacturer,
                serialNumber: data[i]._attributes.serialNumber,
                timestamp: new Date(data[i]._attributes.timestamp),
                deviceUuid: data[i]._attributes.deviceUuid,
                assetId: data[i]._attributes.assetId,
                ManufacturingData_Description: data[i].ManufacturingData.Description._text,
                UUID: data[i].ManufacturingData.UUID._text,
                PartNumber: data[i].ManufacturingData.PartNumber._text,
                PartNumberRevision: data[i].ManufacturingData.PartNumberRevision._text,
                CartridgeType: data[i].ManufacturingData.CartridgeType._text,
                CartridgeDesignRevision: data[i].ManufacturingData.CartridgeDesignRevision._text,
                ManufacturingDate: data[i].ManufacturingData.ManufacturingDate._text,
                ManufacturingTestStatus: data[i].ManufacturingData.ManufacturingTestStatus._text,
                OperationalData_Description: data[i].OperationalData.Description._text,
                ArcTime: parseInt(data[i].OperationalData.ArcTime._text),
                PilotTime: parseInt(data[i].OperationalData.PilotTime._text),
                TransferTime: parseInt(data[i].OperationalData.TransferTime._text),
                NumberOfStarts: parseInt(data[i].OperationalData.NumberOfStarts._text),
                NumberOfTransfers: parseInt(data[i].OperationalData.NumberOfTransfers._text),
                Faults: data[i].OperationalData.Faults._attributes.faultCount > 0 ? FaulttoStringArray(data[i].OperationalData.Faults.Fault) : '',
                EndOfLifeEventCount: parseInt(data[i].OperationalData.EndOfLifeEventCount._text)
            }

            TempDataArray.push(new_data);
        }

        machine.bulkCreate(TempDataArray);
    })
})

app.get('/item', function (req, res) {
    // if (req.query) {
    //     let condition = {};
    //     for (let key in req.query) condition[key] = req.query[key];

    //     machine.findAll({ where: condition }).then(result => {
    //         if (!_.isEmpty(result)) res.send(result);
    //         else res.send('Data not found');

    //     })
    // } else {
    //     machine.findAll().then(result => {
    //         if (!_.isEmpty(result)) res.send(result);
    //         else res.send('Data not found');
    //     })
    // }
    axios.get('https://lib-mtconnect-cartridge.azurewebsites.net/assets').then(result => {

        let data = JSON.parse(xml_js.xml2json(result.data, { compact: true })).
            MTConnectAssets.Assets.HyperthermCartridge;

        let TempDataArray = [];

        for (let i = 0; i < data.length; i++) {
            let new_data = {
                manufacturer: data[i]._attributes.manufacturer,
                serialNumber: data[i]._attributes.serialNumber,
                timestamp: new Date(data[i]._attributes.timestamp),
                deviceUuid: data[i]._attributes.deviceUuid,
                assetId: data[i]._attributes.assetId,
                ManufacturingData_Description: data[i].ManufacturingData.Description._text,
                UUID: data[i].ManufacturingData.UUID._text,
                PartNumber: data[i].ManufacturingData.PartNumber._text,
                PartNumberRevision: data[i].ManufacturingData.PartNumberRevision._text,
                CartridgeType: data[i].ManufacturingData.CartridgeType._text,
                CartridgeDesignRevision: data[i].ManufacturingData.CartridgeDesignRevision._text,
                ManufacturingDate: data[i].ManufacturingData.ManufacturingDate._text,
                ManufacturingTestStatus: data[i].ManufacturingData.ManufacturingTestStatus._text,
                OperationalData_Description: data[i].OperationalData.Description._text,
                ArcTime: parseInt(data[i].OperationalData.ArcTime._text),
                PilotTime: parseInt(data[i].OperationalData.PilotTime._text),
                TransferTime: parseInt(data[i].OperationalData.TransferTime._text),
                NumberOfStarts: parseInt(data[i].OperationalData.NumberOfStarts._text),
                NumberOfTransfers: parseInt(data[i].OperationalData.NumberOfTransfers._text),
                Faults: data[i].OperationalData.Faults._attributes.faultCount > 0 ? FaulttoStringArray(data[i].OperationalData.Faults.Fault) : '',
                EndOfLifeEventCount: parseInt(data[i].OperationalData.EndOfLifeEventCount._text)
            }

            TempDataArray.push(new_data);
        }
        res.send(TempDataArray);
    })
})

//  http://localhost:8000/item
//  http://localhost:8000/item?id=
//  http://localhost:8000/item?manufacturer=
//  http://localhost:8000/item?assetId=
//  http://localhost:8000/item?UUID=
//  http://localhost:8000/item?serialNumber=

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.listen(process.env.PORT || 8000, function () {
    console.log('Start...');
})