import { cva } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-[var(--primary)] text-[var(--primary-foreground)] [a&]:hover:bg-[var(--primary)]/90',
        secondary:
          'border-transparent bg-[var(--secondary)] text-[var(--secondary-foreground)] [a&]:hover:bg-[var(--secondary)]/90',
        destructive:
          'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'text-foreground [a&]:hover:bg-[var(--accent)] [a&]:hover:text-[var(--accent-foreground)]',
        accent: 'bg-[var(--accent)] text-[var(--accent-foreground)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export { badgeVariants }
