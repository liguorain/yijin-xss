


const yijinXssInfo = JSON.parse(
    localStorage.getItem('yijin-xss-info') ||
    '{"current":1,"maximum":0,"history":[]}'
);

function renewInfo(info){
    localStorage.setItem(
        'yijin-xss-info',
        JSON.stringify(info)
    );
}

export const userInfo = {
    getMaxmium(){
        return yijinXssInfo.maximum
    },
    setMaxmium(current){
        const { maximum } = yijinXssInfo;

        if(current < maximum){
            return
        }
        
        yijinXssInfo.maximum = current;

        renewInfo(yijinXssInfo);
    }
}