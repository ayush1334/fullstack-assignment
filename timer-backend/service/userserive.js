const models = require('../../timer-models');

const printModel =()=>{
    console.log(models);
}

const getTimer = async (params)=>{
    try {
        const data = await models.time.findOne({
            where: {
                userId: params.userId
            }
        });
        return { success: true , data}
    } catch (error) {
        console.log(error);
        return{success:true, message: 'something went wrong'}
    }
}

const updateTimer = async (params)=>{
    try {
        const data = await models.time.update({
            last_recorded_time: params.last_recorded_time,
            updateAt: dayjs.unix()
        },
            {
            where: {
                userId: params.userId
            }
        });
        return { success: true , message: 'timer updated'}
    } catch (error) {
        console.log(error);
        return{success:true, message: 'something went wrong'}
    }
}

module.exports={
    printModel,
    getTimer,
    updateTimer
}