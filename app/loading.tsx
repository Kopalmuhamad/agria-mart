const Loading = () => {
  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent-primary border-t-transparent" />
      </div>
    </div>
  )
}

export default Loading