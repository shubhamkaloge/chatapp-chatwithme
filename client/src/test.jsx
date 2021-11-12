{
    messages && messages.map(message => (
        <Box className={classes.container} ref={scrollRef}>
            <Message message={message} />
        </Box>
    ))
}