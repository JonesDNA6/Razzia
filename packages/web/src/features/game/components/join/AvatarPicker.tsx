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
    <div className="mx-auto mt-4 grid max-w-72 grid-cols-8 justify-center gap-1">
      {AVATARS.map((emoji) => (
        <button
          key={emoji}
          type="button"
          onClick={() => onChange(emoji)}
          className={clsx(
            "flex size-8 cursor-pointer items-center justify-center rounded-md text-lg transition-all hover:scale-110",
            value === emoji
              ? "bg-white/30 ring-2 ring-white"
              : "bg-white/10 hover:bg-white/20",
          )}
        >
          {emoji}
        </button>
      ))}
    </div>
  )
}

export default AvatarPicker
