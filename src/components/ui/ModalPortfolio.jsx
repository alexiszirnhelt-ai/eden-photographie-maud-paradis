function ModalPortfolio({ modalId, photos = [] }) {
  return (
    <div className="modal fade" id={modalId} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div
          className="modal-content"
          style={{
            backgroundColor: "#0b3d2e",
            border: "0.25rem solid #c4a77d",
            borderRadius: "2rem",
            overflow: "hidden",
          }}
        >
          <div className="modal-body p-3">
            <div className="text-end mb-2">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Fermer"
              ></button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
              {photos.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`portfolio-${index}`}
                  style={{ width: "100%", height: "14rem", objectFit: "cover", borderRadius: "0.75rem" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPortfolio;
