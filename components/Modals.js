import { useState } from "react";
export function SignUpModal({ onClose }) {
  /* ...same as above... */
}
export function SignInModal({ onClose }) {
  /* ...same as above... */
}
export function BuyTokensModal({ onClose }) {
  /* ...same as above... */
}
export function MiningModal({ onClose }) {
  /* ...same as above... */
}
export function VotingModal({ onClose }) {
  /* ...same as above... */
}
export function EscrowModal({ onClose }) {
  /* ...same as above... */
}
export function DepositWithdrawModal({ onClose }) {
  /* ...same as above... */
}
export function NFTGiftsModal({ onClose }) {
  return (
    <div className="modal">
      <div className="card">
        <h2>Send NFT Gift</h2>
        <form>
          <input placeholder="Recipient" />
          <input placeholder="Amount" />
          <button>Send Gift</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
export function AdminPanelModal({ onClose }) {
  /* ...same as above... */
}
