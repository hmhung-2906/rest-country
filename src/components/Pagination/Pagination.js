import React from "react";
import styled from "styled-components";

const PaginationStyled = styled.nav`
	.pagination {
		padding-top: 20px;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		li {
			margin-top: 20px;
			min-width: 40px;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			border: 2px solid black;
			margin-left: 10px;
			font-size: 16px;
			cursor: pointer;
			:hover {
				background-color: #000;
				color: #fff;
			}
		}
		li.active {
			background-color: #000;
			color: #fff;
		}
	}
`;
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<PaginationStyled>
			<ul className="pagination">
				{pageNumbers.map((number) => (
					<li
						key={number}
						className={currentPage === number ? "active" : ""}
						onClick={() => paginate(number)}
					>
						{number}
					</li>
				))}
			</ul>
		</PaginationStyled>
	);
};

export default Pagination;
