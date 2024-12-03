
        const dropZone = document.getElementById('drop-zone');
        const preview = document.getElementById('preview');
        const message = dropZone.querySelector('p');

        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = "#00f";
        });

        dropZone.addEventListener('dragleave', () => {
            dropZone.style.borderColor = "#ccc";
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = "#ccc";

            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = () => {
                    preview.src = reader.result;
                    preview.style.display = "block";
                    message.style.display = "none";
                };
                reader.readAsDataURL(file);
            } else {
                alert('Please drop an image file.');
            }
        });
        