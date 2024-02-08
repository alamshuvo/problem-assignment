function calculateMoney(ticketSale) {
    if (ticketSale<=0) {
        return 'Invalid Number';
    }
    else{
        const perTicketSale=120;
        const guardCost=500;
        const stufLunchCost=50*8;
        const ticketSaleEarn=perTicketSale*ticketSale;
        const ticketSaleCost=guardCost+stufLunchCost;
        const ticketSaleProfitOrLoss=ticketSaleEarn-ticketSaleCost;
        return ticketSaleProfitOrLoss;
    }
    }