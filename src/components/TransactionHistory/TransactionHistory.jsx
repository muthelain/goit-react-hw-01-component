import PropTypes from 'prop-types';
import {
TransactionTable,
HeadT,
HeadUl,
HeadLi,
BodyT,
BodyUl,
BodyLi,

} from './TransactionHistory.styled';

export function TransactionHistory ({ items }){
    return (
        <TransactionTable>
            <HeadT>
                <HeadUl>
                    <HeadLi>Type</HeadLi>
                    <HeadLi>Amount</HeadLi>
                    <HeadLi>Currency</HeadLi>
                </HeadUl>
            </HeadT>

            <BodyT>
                {items.map(({id,type,amount,currency}) => {
                    return (
                        <BodyUl key={id}>
                            <BodyLi>{type}</BodyLi>
                            <BodyLi>{amount}</BodyLi>
                            <BodyLi>{currency}</BodyLi>
                        </BodyUl>
                    )
                })}
            </BodyT>
        </TransactionTable>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };