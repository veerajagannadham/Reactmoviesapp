import React from "react";
import Box from "@mui/material/Box"; 
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"; 
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

const styles = {
    paginationContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",

    },
    paginationButton: {
        padding: "8px",
        margin: "0 5px",
        color: "#3f51b5", // Material-UI blue
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
            backgroundColor: "#e8eaf6", // Lighter blue on hover
        },
        "&:disabled": {
            color: "#ced4da", // Disabled button color
            cursor: "not-allowed",
        },
    },
    paginationText: {
        margin: "0 10px",
        fontSize: "16px",
        fontWeight: "bold",
        color: "#3f51b5", // Same blue as buttons
    },
};

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    return (
        <Box sx={styles.paginationContainer}>
            <IconButton
                style={styles.paginationButton}
                disabled={currentPage === 1}
                onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
            >
                <ChevronLeftIcon />
            </IconButton>
            <span style={styles.paginationText}>
                Page {currentPage} of {totalPages}
            </span>
            <IconButton
                style={styles.paginationButton}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <ChevronRightIcon />
            </IconButton>
        </Box>
    );
};

export default Pagination;


