let faker = require('faker');

let ManufacturingTestStatus_Values = ['Untested', 'FailedAtOnload', 'FailedShockTest', 'FailedRotationTest',
    'FailedPlasmaTest', 'FailedSpringTest', 'FailedInspection', 'Passed'],
    LastTorchType_Values = ['FactoryDefault', 'HAND_025', 'HAND_050', 'HAND_075', 'HAND_100', 'MECH_025', 'MECH_050', 'MECH_075', 'MECH_100'],
    LastCutMode_Values = ['Factory Default', 'None', 'Normal', 'CPA', 'Gouge'],
    ReleaseType_Values = ['_', 'R', 'H', 'S'],
    FirmwarePartNumber_Values = [081288, 081223, 081251, 081335, 081329],
    Type_Values = ['hand', 'machine', 'full-length machine', 'mini-machine'];

let fake_data = {
    CartridgeType: faker.random.number(4).toString(),
    TypeRevision: faker.random.number(4).toString(),
    PartNumber: faker.random.number({ min: 100000, max: 999999 }),
    PartNumberRevision: faker.random.number({ min: 100000, max: 999999 }),
    ManufacturerLocation: faker.locale.toString(),
    RfidManufacturerId: faker.random.number({ min: 100000, max: 999999 }),
    ManufacturingDate: faker.date.between('2017-01-01', '2020-01-05'),
    RfidTagPartNumber: faker.random.number({ min: 100000, max: 999999 }),
    RfidTagRevision: faker.random.number({ min: 10, max: 99 }),
    ManufacturingTestStatus: faker.random.arrayElement(ManufacturingTestStatus_Values),
    StartNumber: faker.random.number({ min: 10, max: 99 }),
    TransferNumber: faker.random.number({ min: 10, max: 99 }),
    PilotTime: faker.random.number({ min: 10, max: 99 }),
    TransferTime: faker.random.number({ min: 10, max: 99 }),
    ArcTime: faker.random.number({ min: 10, max: 99 }),
    Faults: '1, 4, 3, 77, 4',
    EndOfLifeStrikeNumber: faker.random.number({ min: 1, max: 10 }),
    LastPowerSupplyType: 'Powermax65/85/105',
    LastTorchType: faker.random.arrayElement(LastTorchType_Values),
    LastCutMode: faker.random.arrayElement(LastCutMode_Values),
    LastCurrentSetting: faker.random.number({ min: 10, max: 99 }),
    LastPressureSetting: faker.random.number({ min: 10, max: 999 }),
    ReleaseType: faker.random.arrayElement(ReleaseType_Values),
    Revision: faker.random.number({ min: 10, max: 999 }).toString(),
    FirmwarePartNumber: faker.random.arrayElement(FirmwarePartNumber_Values),
    FirmwareVersion: faker.random.number({ min: 10, max: 99 }).toString(),
    FirmwareBuiltOn: faker.date.between('2017-01-01', '2020-01-05'),
    BootloaderVersion: faker.random.alphaNumeric(),
    PcbPartNumber: faker.random.number({ min: 100000, max: 999999 }),
    PcbVersion: faker.random.alphaNumeric(),
    PartNumber: faker.random.number({ min: 100000, max: 999999 }),
    Version: faker.random.number({ min: 100000, max: 999999 }),
    SerialNumber: faker.random.number({ min: 100000, max: 999999 }),
    ManufacturingDate: faker.date.between('2017-01-01', '2020-01-05'),
    Type_2: faker.random.arrayElement(Type_Values)
}

module.exports = fake_data;









