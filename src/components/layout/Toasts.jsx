import { useEffect } from "react"

export default function Toast({ message, show, onClose, duration = 3000 }) {
    useEffect(() => {
        if (!show) return

        const timer = setTimeout(() => {
        onClose()
        }, duration)

        return () => clearTimeout(timer)
    }, [show, duration, onClose])

    if (!show) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative bg-primary text-white px-12 py-12 rounded-xl shadow-lg">
                {message}
            </div>
        </div>


    )
}
