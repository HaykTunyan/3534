
let { DataTypes } = require('sequelize');
module.exports = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    ArcTime: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    EndOfLifeEventCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    NumberOfStarts: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    NumberOfTransfers: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    PartNumber: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    PilotTime: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    TransferTime: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Faults: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    assetId: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    CartridgeType: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    deviceUuid: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ManufacturingTestStatus: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ManufacturingDate: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    PartNumberRevision: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    UUID: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    manufacturer: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    serialNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    CartridgeDesignRevision: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ManufacturingData_Description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    OperationalData_Description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    timestamp: {
        type: 'TIMESTAMP',
        allowNull: true,
    }
}

