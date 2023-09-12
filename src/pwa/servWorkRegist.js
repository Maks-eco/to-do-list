import { Workbox } from 'workbox-window'

export default function registerServiceWorker() {
    if ('production' !== process.env.NODE_ENV) {
        return
    }

    if ('serviceWorker' in navigator) {
        const wp = new Workbox('sw.js')
        wp.addEventListener('installed', e => {
            if (e.isUpdate) {
                if (confirm('new upd avail')) {
                    window.location.reload()
                }
            }
        })
        wp.register()
    }
}
