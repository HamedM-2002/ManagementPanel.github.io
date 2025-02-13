let timer;

document.getElementById('RequestSent').addEventListener('click', function () {
    const spanElement = this.querySelector('span');
    spanElement.classList.remove('visually-hidden');

    const startTime = new Date();
    const toastElement = document.getElementById('NotificationToast');
    $(toastElement).toast('show');

    const elapsedTimeElement = toastElement.querySelector('.toast-header small');
    const toastBody = toastElement.querySelector('.toast-body');

    // Clear any existing timer
    if (timer) clearInterval(timer);
    timer = setInterval(function () {
        const now = new Date();
        const elapsed = Math.floor((now - startTime) / 1000);
        if (elapsed < 60) {
            elapsedTimeElement.textContent = 'چند لحظه قبل';
        } else if (elapsed < 3600) {
            elapsedTimeElement.textContent = `${Math.floor(elapsed / 60)} دقیقه قبل`;
        } else {
            elapsedTimeElement.textContent = `${Math.floor(elapsed / 3600)} ساعت قبل`;
        }
    }, 1000);

    // Check the current permission status
    if (Notification.permission === 'denied') {
        // Permission denied previously
        toastBody.textContent = 'شما مجوز دریافت اعلان‌ها را غیرفعال کرده‌اید. لطفاً تنظیمات مرورگر خود را بررسی کنید.';
        spanElement.classList.add('visually-hidden');
    } else if (Notification.permission === 'granted') {
        // Permission already granted
        toastBody.textContent = 'شما قبلاً مجوز دریافت اعلان‌ها را داده‌اید.';
        document.getElementById('NotifRequestAlarm').classList.add('visually-hidden');
    } else {
        // Permission not yet requested or dismissed, request it
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                toastBody.textContent = 'درخواست ارسال اعلانات پذیرفته شد. از این به بعد اعلانات به شما نمایش داده میشوند.';
                document.getElementById('NotifRequestAlarm').classList.add('visually-hidden');
            } else if (permission === 'denied') {
                toastBody.textContent = 'درخواست ارسال اعلانات از سوی شما رد شد. اعلانات قابل نمایش نیستند!';
                spanElement.classList.add('visually-hidden');
            } else {
                toastBody.textContent = 'لطفاً دوباره تلاش کنید.';
            }
        });
    }

    // Stop timer when toast is closed
    document.querySelector('#NotificationToast .toast-header .close').addEventListener('click', function () {
        clearInterval(timer);
        elapsedTimeElement.textContent = '';
    });
});


if (Notification.permission === 'granted') {
  document.getElementById('NotifRequestAlarm').classList.add('visually-hidden');
}