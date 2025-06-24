import LoadingProgress from '@/components/loading-progress'

const SuspenseFallback = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <LoadingProgress />

      <p className='text-sm text-muted-foreground'>Loading...</p>
    </div>
  )
}

export default SuspenseFallback
