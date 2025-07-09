import { useState } from "react";
import SocialMediaFeed from "./SocialMediaFeed";
import ICOCounter from "./ICOCounter";
import MiningCounter from "./MiningCounter";
import {
  SignUpModal,
  SignInModal,
  BuyTokensModal,
  MiningModal,
  VotingModal,
  EscrowModal,
  DepositWithdrawModal,
  NFTGiftsModal,
  AdminPanelModal,
} from "./Modals";

export default function SplitScreenLanding() {
  const [modal, setModal] = useState(null);
  const [expandSocial, setExpandSocial] = useState(false);
  return (
    <div className="main-bg">
      <header className="header">
        <div className="logo">MAZOL-Pro</div>
        <div>
          <button onClick={() => setModal("signup")}>
            Sign Up
          </button>
          <button onClick={() => setModal("signin")}>
            Sign In
          </button>
          <button onClick={() => setModal("admin")}>
            Admin Panel
          </button>
        </div>
      </header>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            flex: expandSocial ? 1 : 0.5,
            transition: "flex 0.3s",
            position: "relative",
          }}
        >
          <SocialMediaFeed />
          <button
            style={{
              position: "absolute",
              right: 16,
              top: 16,
              zIndex: 10,
              background: "#a83232",
            }}
            onClick={() => setExpandSocial(!expandSocial)}
          >
            {expandSocial ? "Collapse" : "Expand"}
          </button>
        </div>
        {!expandSocial && (
          <div
            style={{
              flex: 0.5,
              background: "#800000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="flex-row"
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ICOCounter />
              <MiningCounter />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "24px 0",
              }}
            >
              <button
                onClick={() => setModal("signup")}
                style={{ fontSize: 20, margin: "0 24px" }}
              >
                Sign Up
              </button>
              <button
                onClick={() => setModal("signin")}
                style={{ fontSize: 20, margin: "0 24px" }}
              >
                Sign In
              </button>
            </div>
            <footer
              className="flex-row"
              style={{ marginBottom: 24 }}
            >
              <button onClick={() => setModal("buy")}>
                Buy Tokens
              </button>
              <button onClick={() => setModal("mining")}>
                Start Mining
              </button>
              <button onClick={() => setModal("voting")}>
                Vote
              </button>
              <button onClick={() => setModal("escrow")}>
                Escrow
              </button>
              <button onClick={() => setModal("nft")}>
                NFT Gifts
              </button>
              <button onClick={() => setModal("wallet")}>
                Deposit/Withdraw/Swap
              </button>
            </footer>
          </div>
        )}
      </div>
      {modal === "signup" && (
        <SignUpModal onClose={() => setModal(null)} />
      )}
      {modal === "signin" && (
        <SignInModal onClose={() => setModal(null)} />
      )}
      {modal === "buy" && (
        <BuyTokensModal onClose={() => setModal(null)} />
      )}
      {modal === "mining" && (
        <MiningModal onClose={() => setModal(null)} />
      )}
      {modal === "voting" && (
        <VotingModal onClose={() => setModal(null)} />
      )}
      {modal === "escrow" && (
        <EscrowModal onClose={() => setModal(null)} />
      )}
      {modal === "nft" && (
        <NFTGiftsModal onClose={() => setModal(null)} />
      )}
      {modal === "wallet" && (
        <DepositWithdrawModal
          onClose={() => setModal(null)}
        />
      )}
      {modal === "admin" && (
        <AdminPanelModal onClose={() => setModal(null)} />
      )}
    </div>
  );
}
