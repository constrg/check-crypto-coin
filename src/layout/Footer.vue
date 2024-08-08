<template>
    <footer class="footer">
        <div class="footer-container container">
            <p class="copy">&copy; Developed by Ricardo L. Garcia. All rights reserved 2024.</p>
            <span>API Souce: <a href="https://www.coingecko.com/en/api" target="_blank">https://www.coingecko.com/</a></span>
        </div>
    </footer>
</template>

<style scoped>
.footer 
{
    background-color: rgb(var(--clr-accent));
    padding-block: 20px;
}

.footer .footer-container
{
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

@media (max-width: 480px)
{
    .footer .footer-container
    {
        flex-direction: column;
    }
}
</style>