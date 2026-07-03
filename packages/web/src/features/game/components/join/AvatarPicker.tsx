import clsx from "clsx"

const AVATARS = [
  "😀", "😎", "🥳", "🤩",
  "🐶", "🐱", "🦊", "🐼",
  "🐨", "🐸", "🦁", "🐯",
  "🐰", "🐹", "🐻", "🐧",
  "🐥", "🐴", "🦄", "🐞",
  "🐙", "🦋", "🌻", "🌟",
  "🍀", "🚀", "🎸", "🎮",
  "🎯", "🏀", "⚽", "🎨",
]

interface Props {
  value: string
  onChange: (_avatar: string) => void
}

const AvatarPicker = ({ value, onChange }: Props) => {
  return (
    <div className="mx-auto mt-3 grid max-w-72 grid-cols-8 gap-1">
      {AVATARS.map((emoji) => (
        <button
          key={emoji}
          type="button"
          onClick={() => onChange(emoji)}
          className={clsx(
            "flex size-9 cursor-pointer items-center justify-center rounded-md text-xl transition-all active:scale-90",
            value === emoji
              ? "scale-110 bg-white/30 ring-2 ring-white"
              : "bg-white/10 hover:scale-110 hover:bg-white/20",
          )}
        >
          {emoji}
        </button>
      ))}
    </div>
  )
}

export default AvatarPicker
