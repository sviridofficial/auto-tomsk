export const copyElement = () => {
    const copiedNumber = document.getElementById("copyElement");
    const notification = document.getElementById("notification");

    copiedNumber.addEventListener("click", () => {
        copyToClipBoard(copiedNumber.textContent);
    })

    const copyToClipBoard = (copiedString) =>{
        const area = document.createElement('textarea');

        document.body.appendChild(area);
        area.value = copiedString;
        area.select();

        document.execCommand("copy");
        document.body.removeChild(area);

        activeNotification();
    }

    const activeNotification = () =>{
        notification.classList.add("active");

        setTimeout(()=>{
            notification.classList.remove("active");
        }, 1000)

    }


};
